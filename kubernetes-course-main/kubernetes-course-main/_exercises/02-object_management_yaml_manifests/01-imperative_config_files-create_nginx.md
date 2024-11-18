# Creating NGINX Pods and Services in Kubernetes

## Overview

In this exercise, we're diving into the world of Kubernetes by learning how to create and manage NGINX pods using imperative commands along with configuration files. This is a great opportunity to solidify your understanding of both concepts before you dive into the step-by-step guide. Are you ready? 👍

Here’s a quick overview of what you'll be implementing:

1. Create an NGINX pod using imperative commands.
2. Write a configuration file for the NGINX pod.
3. Define the necessary metadata and specifications in the YAML file.
4. Create a service to expose the NGINX pod.
5. Verify that the pod and service are running correctly.

Go ahead and give it a try before checking the detailed steps below!

## Step-by-Step Guide

Let's break down the process of creating an NGINX pod along with exposing it via a service:

1. **Open your IDE:** Start by creating a new folder for your project (you can name it `object-management`).
2. **Create the Pod Configuration File:**
   - Create a new file named `nginx-pod.yaml`.
   - Define the API version with `apiVersion: v1`.
   - Declare the kind of resource with `kind: Pod`.
   - Add metadata (name the pod as `nginx-pod` and include a simple label, e.g., `app: nginx`).
     ```yaml
     metadata:
       name: nginx-pod
       labels:
         app: nginx
     ```
3. **Define the Pod Specification:**
   - In the `spec` section, add the containers list.
   - Specify the image as `nginx:1.27.0` and give your container a name (`nginx-container`).
   - You can optionally add a ports array (`containerPort: 80`).
4. **Create the Pod:**
   - Open your terminal and run the command:
     ```
     kubectl create -f nginx-pod.yaml
     ```
5. **Verify the Pod:**
   - Check if the pod is running using:
     ```
     kubectl get pods
     ```
   - Get additional details about the pod with:
     ```
     kubectl describe pod nginx-pod
     ```
6. **Expose the Pod as a Service:**
   - Use the command to expose it:
     ```
     kubectl expose pod nginx-pod --type=ClusterIP --port=80 --target-port=80
     ```
7. **Confirm the Service:**
   - Check that the service was created successfully:
     ```
     kubectl get svc
     ```

## Conclusion

Great job! Today, we've explored how to create an NGINX pod and then expose it using a service in Kubernetes. By practicing these steps, you're getting hands-on experience with both imperative command usage and writing Kubernetes configuration files. Keep experimenting and applying what you've learned as you continue your Kubernetes journey! 🚀
