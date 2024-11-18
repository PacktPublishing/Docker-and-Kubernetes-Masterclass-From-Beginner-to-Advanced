# Kubernetes Fundamentals: Working with Labels and Selectors

Welcome to the section on working with labels and selectors in Kubernetes! In this session, we'll explore how to effectively use labels to manage your Pods more efficiently. 🎉 Before diving into the step-by-step guide, I'd like to challenge you to implement the solution yourself. 

## Overview

In this exercise, you'll be practicing how to create Pods with specific labels and how to filter them using Kubernetes selectors. Here’s a high-level summary of the steps you’ll need to follow:

1. Create a configuration file for your Pods with specific metadata and labels.
2. Use `kubectl` to apply these configurations and create the Pods.
3. Retrieve and filter Pods based on their labels using various selectors.
4. Experiment with combining labels and using set-based operators to refine your queries.

I encourage you to try implementing these steps on your own before proceeding to the detailed instructions below!

## Step-by-Step Guide

1. **Set Up Your Environment**: Open your preferred IDE (like Visual Studio Code) in an empty folder.
   
2. **Create YAML Configuration**:
   - Create a file named `color_api.yaml`.
   - Define two Pods within this file:
     - **Backend Pod**:
       - Set **apiVersion** to `v1`, **kind** to `Pod`.
       - Add metadata with labels:
         - `app: color-api`
         - `environment: local`
         - `tier: backend`
       - Specify the container with the following:
         - Name: `color-backend`
         - Image: `lmacademy/color-api:1.1.0`
         - Port: `80`
     - **Frontend Pod**:
       - Duplicate the backend pod definition, changing:
         - Name to `color-frontend`
         - Image to `nginx:1.27.0`
         - Tier to `frontend`.

3. **Apply the Configuration**: In your terminal, navigate to the folder containing your `color_api.yaml` file and run:
   ```bash
   kubectl apply -f color_api.yaml
   ```

4. **View Pods**: Check the status of your Pods with:
   ```bash
   kubectl get pods
   ```

5. **Filter by Labels**:
   - Use the following command to see Pods with the `app` label:
     ```bash
     kubectl get pods -L app
     ```
   - Try filtering specific Pods using their labels:
     - For example, to get the backend Pods:
       ```bash
       kubectl get pods -l tier=backend
       ```
   - Experiment with combining filters using:
     ```bash
     kubectl get pods -l tier=frontend,app=color-api
     ```
   - Explore set-based operators such as:
     ```bash
     kubectl get pods -l tier in (frontend)
     ```

6. **Experiment**: Continue to refine your queries using various combinations of labels and operators.

## Conclusion

In this session, we explored how to create and manage Pods in Kubernetes using labels and selectors. Remember that using labels effectively can help you maintain a clean and organized cluster, especially as it scales. Keep practicing these concepts, and you'll find them becoming second nature as you continue your Kubernetes journey! 🚀
