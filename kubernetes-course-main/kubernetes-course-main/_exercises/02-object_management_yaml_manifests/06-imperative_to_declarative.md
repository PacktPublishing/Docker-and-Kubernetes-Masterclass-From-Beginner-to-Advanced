# Transitioning from Imperative to Declarative in Kubernetes

In this exercise, we're going to explore how to transition from an imperative approach to a declarative approach in Kubernetes.

## Overview

The primary focus will be on using the `kubectl apply` command to manage our resources effectively. Before diving into the step-by-step guide, here’s a quick summary of what you should aim to implement:

1. Create a pod using the imperative `kubectl create` command.
2. Confirm that the pod is created using `kubectl get pods`.
3. Use the `kubectl apply` command to apply the same pod configuration with the nginx pod file.
4. Check the pod’s configuration to verify the presence of the last applied configuration annotation.
5. Optionally, learn how to use the `--save-config` flag for future resource creations.

Take a moment to try implementing these steps on your own before checking out the detailed guide below. Don't hesitate to experiment! 🚀

## Step-by-Step Guide

Here’s a straightforward guide to help you transition your command usage:

1. **Create a Pod**:
   ```bash
   kubectl create -f nginx-pod.yaml
   ```
2. **Check the Created Pod**:

   ```bash
   kubectl get pods
   ```

3. **Apply the Configuration**:

   ```bash
   kubectl apply -f nginx-pod.yaml
   ```

4. **Verify the Last Applied Configuration**:

   ```bash
   kubectl get pod nginx -o yaml
   ```

   Look for the `last-applied-configuration` annotation.

5. **Optionally Use the Save Config Flag**:
   If you didn't use the `--save-config` option during creation, you can still proceed with `kubectl apply` as it will patch the configuration automatically.

6. **Clean Up**:
   Don't forget to delete any objects defined in your configuration files to keep your environment tidy:
   ```bash
   kubectl delete -f nginx-pod.yaml
   ```

## Conclusion

By moving from imperative commands to using `kubectl apply`, you not only streamline your resource management but also embrace a more declarative way of working with Kubernetes. This transition allows Kubernetes to maintain the last applied configuration for seamless updates. Keep practicing, and don’t hesitate to try out different configurations! Remember, getting comfortable with these commands will make you more proficient in Kubernetes management.
