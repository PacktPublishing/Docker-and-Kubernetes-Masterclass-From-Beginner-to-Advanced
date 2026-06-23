# Lab: CPU-Based Horizontal Pod Autoscaling

> **Assumed knowledge:** You are comfortable with Kubernetes core concepts — Deployments, Services, namespaces, and `kubectl`. This lab assumes a local cluster (Kind or Minikube) is already running.

## 🎯 Lab Goal

Deploy a CPU-intensive demo application, configure an HPA that targets 50% CPU utilization, generate artificial load, and observe the cluster scale up and back down automatically. You will also tune the scale-down stabilization window and see the effect.

## 📝 Overview & Concepts

The Horizontal Pod Autoscaler reads CPU metrics from the `metrics.k8s.io` API (provided by **metrics-server**) and adjusts the replica count of a target Deployment using this formula:

```
desiredReplicas = ceil( currentReplicas × (currentCPU / targetCPU) )
```

Two things must be true for HPA to work with CPU:

1. **metrics-server must be installed.** This is the cluster add-on that aggregates CPU and memory readings from each node's kubelet and exposes them via the Kubernetes API.
2. **The target Deployment must have `resources.requests.cpu` set.** HPA calculates utilization as a percentage of the requested CPU. Without a request, there is no denominator and HPA reports `<unknown>`.

The demo app used in this lab — `registry.k8s.io/hpa-example` — is the standard example from the official Kubernetes HPA documentation. It runs a PHP server that computes square roots in a loop on every request, making it deliberately CPU-wasteful and easy to saturate.

## 📋 Tasks

**1. Verify prerequisites**

Confirm metrics-server is running and healthy:

```bash
kubectl top nodes
```

If this returns CPU and memory values for your node(s), the metrics pipeline is ready. If it returns an error, enable metrics-server first:

```bash
# For Minikube:
minikube addons enable metrics-server

# For Kind — apply the official manifest:
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
# Kind requires an extra flag since its API server uses self-signed certs:
kubectl patch deployment metrics-server -n kube-system \
  --type='json' \
  -p='[{"op": "add", "path": "/spec/template/spec/containers/0/args/-", "value": "--kubelet-insecure-tls"}]'
```

Wait 30–60 seconds after enabling, then re-run `kubectl top nodes` to confirm.

**2. Deploy php-apache**

Apply the starter manifest, which creates a Deployment and a ClusterIP Service in the `default` namespace:

```bash
kubectl apply -f starter/php-apache.yaml
```

Verify the pod is running and metrics are available:

```bash
kubectl get pods
kubectl top pods
```

Wait until `kubectl top pods` shows a CPU value (not `<unknown>`) before proceeding — this confirms the pod has been scraped at least once.

**3. Write the HPA resource**

Create a file called `hpa.yaml` with the following content:

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: php-apache
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: php-apache
  minReplicas: 1
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 50
```

Apply it:

```bash
kubectl apply -f hpa.yaml
```

**4. Inspect the HPA initial state**

```bash
kubectl get hpa php-apache
```

You will likely see:

```
NAME         REFERENCE               TARGETS         MINPODS   MAXPODS   REPLICAS
php-apache   Deployment/php-apache   <unknown>/50%   1         10        1
```

The `<unknown>` is expected — HPA needs a few seconds to fetch the first metrics reading. Wait 30 seconds and run again:

```bash
kubectl get hpa php-apache --watch
```

Once the target resolves to a real percentage (e.g. `1%/50%`), you are ready to generate load.

**5. Start the load generator**

In a **new terminal**, run a pod that sends an infinite stream of HTTP requests to php-apache:

```bash
kubectl run load-generator \
  --image=busybox:1.36 \
  --restart=Never \
  -- /bin/sh -c "while true; do wget -q -O- http://php-apache; done"
```

Leave this running. Switch back to your first terminal.

**6. Watch the HPA scale up**

Run both of these watches side by side (use two terminal splits if you have them):

```bash
# Terminal 1: watch the HPA metric and replica recommendations
kubectl get hpa php-apache --watch

# Terminal 2: watch the pods being created
kubectl get pods --watch
```

Within 1–2 minutes the CPU reading should climb above 50% and new replicas will start appearing. HPA evaluates every 15 seconds, so the first scale event may take up to 60 seconds to trigger after CPU climbs.

You should see the replica count increase step by step — HPA does not jump to 10 replicas at once. It scales in controlled increments.

**7. Stop the load generator and observe scale-down**

Delete the load generator pod:

```bash
kubectl delete pod load-generator
```

Continue watching the HPA:

```bash
kubectl get hpa php-apache --watch
```

Notice that the CPU drops quickly, but the replica count does **not** drop immediately. This is the default 5-minute stabilization window for scale-down. HPA waits to be sure the load is gone before removing replicas.

> ⚠️ The default stabilization window is 300 seconds (5 minutes). Do not wait the full window for this step — it is enough to observe that scale-down is delayed and understand why.

**8. Tune the stabilization window**

Edit `hpa.yaml` to add a `behavior` block that reduces the scale-down stabilization window to 60 seconds:

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: php-apache
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: php-apache
  minReplicas: 1
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 50
  behavior:
    scaleDown:
      stabilizationWindowSeconds: 60
```

Apply the updated HPA:

```bash
kubectl apply -f hpa.yaml
```

Restart the load generator, wait for scale-up to happen again, then delete the load generator. This time, scale-down should happen within roughly 60–90 seconds after CPU drops.

**9. Clean up**

```bash
kubectl delete -f hpa.yaml
kubectl delete -f starter/php-apache.yaml
```

## 🤖 AI Checkpoints

1. **Why `resources.requests` is required:**

   Ask your AI assistant: "I applied an HPA targeting 50% CPU utilization but the TARGETS column shows `<unknown>/50%` and the replica count never changes. My pod is definitely receiving traffic. What could cause this?"

   **What to evaluate:** Does it identify that the Deployment is missing `resources.requests.cpu`? Does it explain that HPA calculates utilization as `actual_cpu / requested_cpu` and cannot produce a percentage without a denominator? Does it suggest checking both the Deployment spec and whether metrics-server is installed and healthy?

2. **The stabilization window:**

   Ask: "After I deleted the load generator, the CPU on my pods dropped to near zero almost immediately. But the HPA didn't scale down for several minutes. Is this a bug? Why does Kubernetes behave this way?"

   **What to evaluate:** Does it explain the stabilization window concept — that HPA tracks recommended replica counts over the window and only acts on the minimum recommendation seen in that period? Does it describe the problem this solves (thrashing — scaling down only to scale right back up on the next traffic burst)? Does it mention that the default is 300 seconds and it is configurable via the `behavior.scaleDown.stabilizationWindowSeconds` field?

3. **HPA arithmetic:**

   Ask: "My HPA has `averageUtilization: 50`. There are currently 3 running pods. Pod A is at 90% CPU, pod B is at 70% CPU, and pod C is at 80% CPU. How many replicas will HPA try to schedule? Walk me through the formula."

   **What to evaluate:** Does it calculate the average correctly: (90 + 70 + 80) / 3 = 80%? Does it apply the formula: ceil(3 × (80 / 50)) = ceil(4.8) = 5 replicas? Does it note that HPA uses the _average_ across all pods, not the peak?

## 📚 Resources

- [Kubernetes HPA documentation](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/)
- [HPA walkthrough (official)](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/)
- [autoscaling/v2 API reference](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/horizontal-pod-autoscaler-v2/)
- [metrics-server repository](https://github.com/kubernetes-sigs/metrics-server)
