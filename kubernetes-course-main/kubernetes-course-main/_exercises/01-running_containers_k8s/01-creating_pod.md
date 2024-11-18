# Creating and Managing Pods in Kubernetes

## Overview

In this exercise, we'll explore how to create and manage pods using the `kubectl` command-line utility. By the end of this session, you should have a good understanding of the basic commands needed to spin up your first pod. Before diving into the step-by-step process, give it a try on your own! Here’s a quick summary of the steps you'll be attempting:

1. Ensure Kubernetes is running and verify the `kubectl` version.
2. Check your current context to ensure it's set to `minikube`.
3. Use the `kubectl run` command to create a pod with an NGINX image.
4. Confirm the pod is running and in a ready state.

Have a go at implementing this before you peek into the guide below! 🚀

## Step-by-Step Guide

Here’s how to create and manage your pod in a clear step-by-step format:

1. **Check Kubernetes Setup**: Run the command `kubectl version` to check if Kubernetes is up and running. You should receive a valid response from the server.
2. **Verify Context**: Ensure you're set to the `minikube` context by executing:
   ```bash
   kubectl config current-context
   ```
   If it doesn't return `minikube`, update the context with:
   ```bash
   kubectl config set-context minikube
   ```
3. **Run the Pod**: Use the following command to create an NGINX pod (version 1.27.0):
   ```bash
   kubectl run my-nginx --image=nginx:1.27.0
   ```
   Replace `my-nginx` with your preferred pod name.
4. **Check the Pod Status**: After running the command, verify your pod's status by using:
   ```bash
   kubectl get pods
   ```
   You should see your pod listed as 'Running' and ready.

## Conclusion

Congratulations on successfully spinning up your first pod! 🎉 You’ve now gone through the basics of using `kubectl` to create and manage pods in Kubernetes. Keep practicing these commands and exploring other features of Kubernetes to deepen your understanding. The more you experiment, the more proficient you’ll become!
