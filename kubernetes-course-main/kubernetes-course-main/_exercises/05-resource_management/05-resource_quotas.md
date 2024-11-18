# Kubernetes Fundamentals: Resource Quotas in Kubernetes

## Overview

In this exercise, we will learn how to implement resource quotas in Kubernetes namespaces. Resource quotas help manage the resources allocated to your applications, ensuring that you don’t exceed certain limits. Before diving into the step-by-step guide, we encourage you to try implementing this on your own! Here’s a high-level summary of the steps to follow:

1. Create two namespaces: `dev` and `prod`.
2. Define resource quotas for both namespaces.
   - Set requests and limits for CPU and memory for the `dev` namespace.
   - Set scaled requests and limits for the `prod` namespace.
3. Apply the configurations using `kubectl`.
4. Verify that resources are correctly allocated and limits are set.

Give it a shot! 🚀 Challenge yourself to implement these steps before referencing the detailed guide below.

## Step-by-Step Guide

1. **Create Namespaces**: In an empty directory, create a YAML file for each namespace (one for `dev` and one for `prod`).

   ```yaml
   apiVersion: v1
   kind: Namespace
   metadata:
     name: dev
   ---
   apiVersion: v1
   kind: Namespace
   metadata:
     name: prod
   ```

2. **Define Resource Quotas**: Combine the resource quota definitions for both namespaces into a single file.

   ```yaml
   apiVersion: v1
   kind: ResourceQuota
   metadata:
     name: dev-quota
     namespace: dev
   spec:
     hard:
       requests.cpu: '1'
       requests.memory: '1Gi'
       limits.cpu: '2'
       limits.memory: '2Gi'
   ---
   apiVersion: v1
   kind: ResourceQuota
   metadata:
     name: prod-quota
     namespace: prod
   spec:
     hard:
       requests.cpu: '2'
       requests.memory: '2Gi'
       limits.cpu: '4'
       limits.memory: '4Gi'
   ```

3. **Apply Resource Quotas**: Use the terminal command to apply the configurations:

   ```bash
   kubectl apply -f your_file_name.yaml
   ```

4. **Verify Quotas**: Check that the quotas are set properly:

   ```bash
   kubectl get resourcequota --all-namespaces
   kubectl describe resourcequota dev-quota --namespace=dev
   kubectl describe resourcequota prod-quota --namespace=prod
   ```

5. **Explore Further**: Experiment with creating pods in both namespaces that utilize the specified resource limits to see how Kubernetes enforces these quotas.

## Conclusion

In this lesson, we tackled the concept of resource quotas in Kubernetes, focusing on how to define and apply them within different namespaces. Remember, being aware of resource limits helps maintain efficient resource usage across your cluster. Keep exploring and practicing this concept to deepen your understanding! Happy learning! 🎉
