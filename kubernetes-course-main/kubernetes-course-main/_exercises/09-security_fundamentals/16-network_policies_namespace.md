# Understanding Network Policies in Kubernetes

## Overview

In this exercise, we will delve into the concept of network policies in Kubernetes, particularly with respect to their application in different namespaces. You'll explore how to create and apply a 'deny all' policy and understand its effects on namespace traffic.

Before you dive into the step-by-step instructions, give it a try on your own! Here’s a summary of the main steps you should attempt:

1. **Create a new namespace** (e.g., `dev`).
2. **Define a 'deny all' network policy** and apply it.
3. **Deploy a pod** in the new namespace to test connectivity.
4. **Validate the network policy** by attempting to ping external services from different pods.

Take your time, work through these steps, and see how the network policies behave. Once you've given it a shot, check out the guide below!

## Step-by-Step Guide

1. **Create a New Namespace**:

   - Use the following command to create a new namespace named `dev`:
     ```shell
     kubectl create namespace dev
     ```

2. **Define a 'Deny All' Network Policy**:

   - Create a YAML file that specifies a network policy to deny all ingress and egress traffic:
     ```yaml
     apiVersion: networking.k8s.io/v1
     kind: NetworkPolicy
     metadata:
       name: deny-all
       namespace: default
     spec:
       podSelector: {}
       policyTypes:
         - Ingress
         - Egress
     ```

3. **Apply the Network Policy**:

   - Save the YAML above as `deny-all.yaml` and apply it using:
     ```shell
     kubectl apply -f deny-all.yaml
     ```

4. **Deploy a Test Pod**:

   - Deploy a pod that you will use to test connectivity:
     ```shell
     kubectl run curl3 --image=radial/busyboxplus:curl -n dev --restart=Never -- sleep 3600
     ```

5. **Test Connectivity**:

   - Exec into the pod:
     ```shell
     kubectl exec -it curl3 -n dev -- /bin/sh
     ```
   - Try to ping an external service (e.g., google.com):
     ```shell
     ping google.com
     ```

6. **Repeat with Different Namespaces**:
   - Create another test environment and see how the policy behaves with other namespaces to confirm its behavior.

## Conclusion

In this session, we've explored how network policies in Kubernetes operate on a namespace-level basis, particularly how they can deny traffic effectively. By structuring your network policies correctly, you ensure that your applications remain secure and performant across different namespaces. Keep practicing this concept to solidify your understanding! 🌐
