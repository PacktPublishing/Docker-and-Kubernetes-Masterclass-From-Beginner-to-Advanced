# Combining Selectors in Kubernetes

## Overview

In this session, we’ll explore how to enhance the selection of pods allowed to send traffic to your color API pods using combined selectors. Our goal is to understand how namespace selectors and pod selectors can work together to create more secure communication pathways.

Before diving into the step-by-step implementation, try to outline the process on your own. Here’s a summary of the main steps to guide you:

1. Create a new namespace, e.g., `dev`.
2. Add labels to the namespace to reflect required permissions.
3. Construct selectors that combine both namespace labels and pod labels.
4. Deploy your traffic generator pods in the `dev` namespace.
5. Test the configurations and log the responses.

Now, take a moment to attempt this on your own before looking at the detailed guide below! 😊

## Step-by-Step Guide

1. **Create the Namespace**: Start by creating a new namespace called `dev`. Ensure that you set the kind as `namespace` and the API version as `v1`.

   ```yaml
   apiVersion: v1
   kind: Namespace
   metadata:
     name: dev
     labels:
       name: dev
   ```

2. **Apply the Namespace**: Use `kubectl` to apply the namespace configuration.

   ```bash
   kubectl apply -f dev-namespace.yaml
   ```

3. **Reference Labels**: Access the namespace to verify labels are present using:

   ```bash
   kubectl describe namespace dev
   ```

4. **Combine Selectors**: Create a network policy that includes both a namespace selector and a pod selector, using match labels for specificity:

   ```yaml
   apiVersion: networking.k8s.io/v1
   kind: NetworkPolicy
   metadata:
     name: my-network-policy
     namespace: dev
   spec:
     podSelector:
       matchLabels:
         app: traffic-generator
     ingress:
       - from:
           - namespaceSelector:
               matchLabels:
                 name: dev
           - podSelector:
               matchLabels:
                 app: traffic-generator
   ```

5. **Deploy the Traffic Generator**: Set up your traffic generator pods with the correct labels:

   ```yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: traffic-generator
     namespace: dev
   spec:
     replicas: 3
     template:
       metadata:
         labels:
           app: traffic-generator
       spec:
         containers:
           - name: traffic-generator
             image: your-traffic-generator-image
   ```

6. **Test the Setup**: After applying the policy and deploying the pods, check the logs to ensure they can communicate correctly within the defined namespace:
   ```bash
   kubectl logs <traffic-generator-pod-name> -n dev
   ```

## Conclusion

In this lecture, we covered how to combine namespace selectors and pod selectors to enforce more granular network policies in Kubernetes. This technique enhances security by ensuring that only intended pods are allowed to communicate, based on the conditions specified in the selectors. Keep experimenting with these concepts as they are foundational to creating secure applications in Kubernetes!
