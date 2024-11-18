# Kubernetes Fundamentals: Resource Requests and Limits

## Overview

In this exercise, we will be creating pods in the development namespace while managing resource requests and limits. The aim is to gain hands-on experience in configuring these resources effectively, improving both the performance and efficiency of your Kubernetes deployments. Before diving into the step-by-step guide, here's what you should try doing on your own:

1. Create a YAML file for a pod named `Color API` with an appropriate structure.
2. Set resource requests and limits for CPU and memory in your pod's configuration.
3. Attempt to apply your configuration to see if the pod is scheduled correctly.
4. Create another pod called `Heavy API` with increased resource requests and limits.
5. Test whether the `Heavy API` pod can be scheduled based on its resource demands.
6. Clean up by deleting any pods you created during this exercise.

Give these steps a shot first! Don't worry; if you get stuck, we'll have a detailed guide below to help you out. 🚀

## Step-by-Step Guide

1. **Create the Color API Pod YAML File**:

   - Name the file based on your pod (e.g., `color-api-pod.yml`).
   - Include the following details:
     ```yaml
     apiVersion: v1
     kind: Pod
     metadata:
       name: color-api
       labels:
         app: color-api
     spec:
       containers:
         - name: color-api
           image: lm-academy/pods:color-api-1.1.0
           ports:
             - containerPort: 80
           resources:
             requests:
               cpu: '200m'
               memory: '256Mi'
             limits:
               cpu: '500m'
               memory: '512Mi'
     ```

2. **Apply Your Configuration**:

   - Run the following command in your terminal to create the pod in the dev namespace:
     ```
     kubectl apply -f color-api-pod.yml --namespace dev
     ```
   - Verify that the pod is running with:
     ```
     kubectl get pods --namespace dev
     ```

3. **Create the Heavy API Pod**:

   - Duplicate the `Color API` configuration and modify the necessary fields:
     ```yaml
     apiVersion: v1
     kind: Pod
     metadata:
       name: heavy-api
       labels:
         app: heavy-api
     spec:
       containers:
         - name: heavy-api
           image: lm-academy/pods:color-api-1.1.0
           resources:
             requests:
               cpu: '1'
               memory: '1Gi'
             limits:
               cpu: '2'
               memory: '2Gi'
     ```

4. **Attempt to Apply Your Heavy API Pod**:

   - Again, apply the configuration:
     ```
     kubectl apply -f heavy-api-pod.yml --namespace dev
     ```
   - If it fails due to resource limits, check the error message shown in the terminal.

5. **Cleanup**:
   - Delete any created pods using:
     ```
     kubectl delete pod color-api --namespace dev
     kubectl delete pod heavy-api --namespace dev
     ```

## Conclusion

Throughout this exercise, you learned how to configure pods with specific resource requests and limits effectively. You also observed how exceeding those limits can prevent pods from being scheduled. Keep practicing these concepts to enhance your Kubernetes skills, and don’t hesitate to explore more about resource management as you continue your learning journey! 🌱
