# Kubernetes Fundamentals: Secret Generator Implementation

Welcome to the guide on implementing Secret Generators in Kubernetes! In this exercise, we will explore how to transition from Config Maps to Secrets for managing sensitive information efficiently within our applications. 🌟 Before diving into the step-by-step instructions, I encourage you to challenge yourself by trying to implement the solution on your own. Below, you'll find an overview of the main steps:

## Overview

In this exercise, we will implement secret generators to manage sensitive configuration data such as database credentials securely. Here is a summary of the steps you can attempt:

1. Create a `.env` file with your local configuration, including sensitive data (like database username and password).
2. Set up a Secret Generator in your `kustomization.yaml` to read from your `.env` file and output the necessary secrets.
3. Create a deployment that uses the generated secrets by referencing them in the volume definition.
4. Verify that the secrets and Config Maps are correctly linked in your deployment.

Now, take some time to try implementing these steps on your own before looking into the detailed guide below!

## Step-by-Step Guide

Alright, let’s break this down into manageable steps:

1. **Create Your .env File:**

   - Open your project directory and create a file named `.env`.
   - Define your local database credentials in the following format:
     ```
     DB_USERNAME=<your_username>
     DB_PASSWORD=<your_password>
     ```

2. **Configure the Secret Generator:**

   - In your `kustomization.yaml` file, add a section for secret generation:
     ```yaml
     secretGenerator:
       - name: db-secrets
         literals:
           - DB_USERNAME=$(DB_USERNAME)
           - DB_PASSWORD=$(DB_PASSWORD)
         type: Opaque
     ```

3. **Set Up Your Deployment:**

   - Define a deployment that references the secrets you’ve generated. Make sure to include the volume mounts. Here’s a simple example:
     ```yaml
     apiVersion: apps/v1
     kind: Deployment
     metadata:
       name: nginx
     spec:
       replicas: 1
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
               image: nginx
               volumeMounts:
                 - name: db-config
                   mountPath: /db/config
           volumes:
             - name: db-config
               secret:
                 secretName: db-secrets
     ```

4. **Run Your Overlays:**
   - Open your terminal and navigate to the directory containing your `kustomization.yaml`.
   - Execute the following command to apply the changes:
     ```
     kubectl apply -k overlays/dev
     ```
   - Check that your secrets are created and linked properly.

## Conclusion

Well done! You have implemented secret generators in Kubernetes to manage sensitive configuration data securely. Remember that using Secrets rather than Config Maps for sensitive information enhances security in your applications. Keep practicing your Kubernetes skills, and don’t hesitate to apply these concepts in your projects. Happy learning! 🚀
