# Managing Pods with kubectl

## Overview

In this exercise, we’ll dive into managing pods using `kubectl` in Kubernetes. You’ll get hands-on experience with commands that allow you to gather detailed information about your pods and effectively communicate with them. Before you check the step-by-step guide below, why not challenge yourself to implement the following steps on your own?

1. Retrieve a list of all pods in your Kubernetes cluster using `kubectl get pods`.
2. Use the `kubectl describe` command to get detailed information about a specific pod.
3. Create a new pod, ensuring you can access a shell within it.
4. Install a utility like `curl` in your pod.
5. Use the pod's IP address to make requests to another service (your `nginx` pod).
6. Delete the pods once you’re done exploring.

Give it a shot! Try to perform these steps on your own before diving into the detailed guide below. 🤓

## Step-by-Step Guide

1. **Get Pods**:
   Run the command to list all the pods in your cluster:

   ```sh
   kubectl get pods
   ```

2. **Describe a Pod**:
   To gather more information about a specific pod, use the describe command:

   ```sh
   kubectl describe pod <pod-name>
   ```

   Replace `<pod-name>` with the actual name of the pod you want to inspect.

3. **Create a New Pod**:
   Create a pod based on the `alpine:3.20` image with an interactive shell:

   ```sh
   kubectl run <pod-name> --image=alpine:3.20 -it -- /bin/sh
   ```

   Replace `<pod-name>` with the appropriate value.

4. **Install Curl**:
   Once inside the container shell, update package lists and install `curl`:

   ```sh
   apk update
   apk add curl
   ```

5. **Make Requests**:
   With `curl` installed, you can now use the pod's IP address to communicate with the nginx pod (use `kubectl describe pod my-nginx` to retrieve the private IP address of the nginx pod):

   ```sh
   curl <nginx-pod-ip>
   ```

6. **Delete the Pod**:
   Once you've finished testing, you can delete the pod with:
   ```sh
   kubectl delete pod <pod-name>
   ```

## Conclusion

In this lecture, we covered how to gather detailed information about Kubernetes pods using `kubectl`, create and manage pods effectively, and establish communication with them. We also explored some tools like `curl` for testing connectivity. Keep practicing these commands, as getting comfortable with them will greatly improve your abilities in Kubernetes. Happy learning! 🚀
