# Declarative Management in Kubernetes

Welcome to our session on declarative management in Kubernetes! In this exercise, we’ll dive into how to manage Kubernetes objects using the `apply` command and explore the powerful features it offers. Before we get started with the step-by-step guide, I challenge you to implement the solution yourself. 🚀

## Overview

In this exercise, you will learn how to manage Kubernetes objects declaratively using the `kubectl apply` command. To get started, try to follow these steps:

1. Create a new nginx pod using a YAML configuration file.
2. Verify that the pod is running in your cluster.
3. Update the image of the pod and apply the changes.
4. Check the status of the pod after the update.
5. Use the `kubectl diff` command to see differences before applying changes.
6. Delete the pod or service using the `kubectl delete` command.

Give it a go! See if you can work through these steps before looking at the detailed guide below.

## Step-by-Step Guide

1. **Create a Pod**:

   - Write the YAML configuration for an nginx pod and save it as `nginxpod.yaml`.
   - Run the command:
     ```bash
     kubectl apply -f nginxpod.yaml
     ```
   - Confirm that the pod is created:
     ```bash
     kubectl get pods
     ```

2. **Update the Pod**:

   - Modify the `nginxpod.yaml` file to change the image version (e.g., from `1.27.0` to `1.27.0-alpine`).
   - Apply the changes:
     ```bash
     kubectl apply -f nginxpod.yaml
     ```
   - Verify that the pod has been updated.

3. **Check Differences**:

   - Run the diff command to see any differences between your configuration and the current state.
     ```bash
     kubectl diff -f nginxpod.yaml
     ```

4. **Delete Resources**:

   - To delete the nginx pod, run:
     ```bash
     kubectl delete -f nginxpod.yaml
     ```

5. **Manage Multiple Objects**:
   - If you have multiple configurations in a directory, you can apply them all at once by running:
     ```bash
     kubectl apply -f .
     ```

## Conclusion

Congratulations on exploring declarative management in Kubernetes! By using the `kubectl apply` and `kubectl diff` commands, you’re empowered to manage your cluster's state more effectively. Don’t forget to practice more by trying different configurations and operations. Keep experimenting and expanding your Kubernetes skills! 🌟
