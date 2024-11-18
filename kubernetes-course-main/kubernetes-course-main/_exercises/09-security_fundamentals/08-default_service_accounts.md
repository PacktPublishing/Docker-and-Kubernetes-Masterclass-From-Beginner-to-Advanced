# Service Accounts in Kubernetes

Welcome to our session on Service Accounts in Kubernetes! 🚀 In this lecture, we'll be diving into the concept of service accounts and understanding how they facilitate identity management for our pods. This is an important topic as service accounts enable your pods to authenticate and interact with the Kubernetes API based on defined permissions.

## Overview

Before we get into the step-by-step guide, think about how you can implement your own service account and utilize it in your pods to manage permissions and interactions. Here’s a brief summary of the steps you can try on your own:

1. Create a new service account in your desired namespace.
2. Define a pod that utilizes this service account for its operations.
3. Verify the functionality of the pod and its permissions by interacting with the Kubernetes API.
4. Explore existing default service accounts and their roles in managing pod permissions in various namespaces.

I encourage you to give these steps a shot before diving into the detailed guide below!

## Step-by-Step Guide

1. **Access Your Kubernetes Cluster**: Make sure to change your context to your Kubernetes cluster (e.g., `minikube`).
2. **Create a Service Account**:
   ```bash
   kubectl create serviceaccount my-service-account --namespace dev
   ```
3. **Define a Pod Using the Service Account**:
   Create a YAML file (e.g., `my-pod.yaml`) with the following content:
   ```yaml
   apiVersion: v1
   kind: Pod
   metadata:
     name: my-pod
     namespace: dev
   spec:
     serviceAccountName: my-service-account
     containers:
       - name: my-container
         image: outpine/curl:1.0.0
   ```
4. **Apply the Pod Definition**:
   ```bash
   kubectl apply -f my-pod.yaml
   ```
5. **Check the Pod Status**:
   ```bash
   kubectl get pods -n dev
   ```
6. **Describe the Pod**: Verify the service account being used:
   ```bash
   kubectl describe pod my-pod -n dev
   ```
7. **Interact with the Kubernetes API from the Pod**:
   You can exec into the pod and try running `kubectl` commands or curl requests to the Kubernetes API.

## Conclusion

Today, we explored the key concept of service accounts in Kubernetes, how they manage identities, and how to create and utilize your own service accounts for your pods. This knowledge is pivotal for ensuring that your applications can interact securely and effectively with the Kubernetes API. Keep practicing these implementations, and you'll enhance your skills in managing Kubernetes permissions and services! Remember, consistent practice will lead to deeper understanding. 🧠
