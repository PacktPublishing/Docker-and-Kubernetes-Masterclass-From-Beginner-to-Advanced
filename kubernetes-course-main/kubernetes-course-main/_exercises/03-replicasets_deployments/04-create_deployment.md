# Creating a Kubernetes Deployment

## Overview

In this exercise, we'll be exploring how to create a Kubernetes deployment that manages the lifecycle of our application, specifically using an NGINX container. The process involves writing a YAML file that describes the deployment configuration, applying it, and monitoring the state of the deployment.

Here’s a quick summary of the main steps you will be implementing:

1. Set up a new folder for your deployment files.
2. Create and name a new YAML file for the deployment configuration.
3. Define the API version, kind, metadata, and labels for the deployment.
4. Specify the deployment's spec, including replicas and selector.
5. Define the pod template with metadata and container specifications.
6. Apply the deployment configuration using kubectl.
7. Confirm the creation and status of your deployment.

I encourage you to give it a try and implement the solution based on these steps before diving into the step-by-step guide below. 🌟

## Step-by-Step Guide

1. **Create a Folder**:

   - Start by creating a new folder named `deployments`.

2. **Open Your IDE**:

   - Open the `deployments` folder in your preferred Integrated Development Environment (IDE).

3. **Create the YAML File**:

   - Create a new file and name it `nginx-deployment.yaml`.

4. **Write Deployment Configuration**:

   - Populate your YAML file with the following structure:
     ```yaml
     apiVersion: apps/v1
     kind: Deployment
     metadata:
       name: nginx-deployment
       labels:
         app: nginx
     spec:
       replicas: 5
       selector:
         matchLabels:
           app: nginx
       template:
         metadata:
           labels:
             app: nginx
         spec:
           containers:
             - name: nginx
               image: nginx:1.27.0
               ports:
                 - containerPort: 80
       strategy:
         type: RollingUpdate
     ```

5. **Apply the Deployment**:

   - Open your terminal and run:
     ```bash
     kubectl apply -f nginx-deployment.yaml
     ```

6. **Check the Deployment Status**:

   - Use the following command to check the status of your deployment:
     ```bash
     kubectl get deploy
     ```

7. **Describe the Deployment**:

   - To view detailed information about your deployment, run:
     ```bash
     kubectl describe deployment nginx-deployment
     ```

8. **Examine the Pods**:

   - List the pods created by the deployment:
     ```bash
     kubectl get pods
     ```

9. **View Pod Configuration**:
   - If you'd like to check the configuration of an individual pod:
     ```bash
     kubectl get pod <pod-name> -o yaml
     ```

## Conclusion

Congratulations on creating your first Kubernetes deployment! 🎉 We covered how to write the YAML configuration, apply it, and monitor the deployment and its pods. This knowledge is fundamental for managing applications in Kubernetes. Keep practicing, experiment with different configurations, and enhance your skills as we delve deeper into the world of Kubernetes!
