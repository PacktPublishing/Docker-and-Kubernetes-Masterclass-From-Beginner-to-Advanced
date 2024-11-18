# Working with EmptyDir in Kubernetes

Welcome to the guide on leveraging the EmptyDir volume in Kubernetes! 🌟 This README will help you understand how to use this ephemeral storage type effectively. Before diving into the details, there’s a challenge for you: try to implement the solution on your own based on the overview below!

## Overview

In this exercise, we'll explore how to create and manage a Kubernetes pod that utilizes an EmptyDir volume. The key points we’ll look at include:

1. **Create a clean folder** and define a new YAML file for your EmptyDir example.
2. **Set up the Pod Definition**, including the EmptyDir volume configuration.
3. **Implement volume mounts** to allow containers to access the EmptyDir volume.
4. **Test the ephemeral nature** of an EmptyDir by checking file persistence across container restarts.
5. **Create two containers** within the same pod, designating one as a writer and the other as a reader of the shared volume.

Now, give this a shot on your own! Once you've tried your hand at implementing it, check out the step-by-step guide below.

## Step-by-Step Guide

1. **Create a new folder** for your project and navigate into it.
2. **Create a YAML file** named `empty-dir-example.yaml` and define your pod with the following configurations:
   - Define the pod with `apiVersion: v1`, and `kind: Pod`.
   - Set the image to `busybox:1.36.1`.
3. **Define the EmptyDir volume** in the `volumes` section of your pod definition:
   ```yaml
   volumes:
     - name: temporary-storage
       emptyDir: {}
   ```
4. **Add volume mounts** in your container definition to specify where the EmptyDir volume should be accessed:
   ```yaml
   volumeMounts:
     - name: temporary-storage
       mountPath: /user/share/temp
   ```
5. **Deploy your pod** by running `kubectl apply -f empty-dir-example.yaml` in the terminal.
6. **Test if the setup works** by using `kubectl exec` to enter the container and create files in the mounted directory.
7. **Check file persistence** by deleting the pod and re-creating it to see if the mounted files are deleted.
8. **Create a second container** within the same pod, allowing one container to write and the other to read from the same EmptyDir volume:
   - Set the reader container with the `readOnly` flag set to `true`.

## Conclusion

You've learned how to implement and manage EmptyDir volumes in Kubernetes! This type of storage is transient and tied to the pod lifecycle, making it essential to consider when handling data in your applications. Keep practicing and exploring other volume types as we continue our Kubernetes journey together! 💻
