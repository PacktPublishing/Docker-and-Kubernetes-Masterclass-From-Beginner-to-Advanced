# Getting Started with Your First Kustomize Project

Welcome to the exciting world of Kustomize! In this guide, we’re going to embark on creating your very first Kustomize project. The beauty of Kustomize lies in its ability to manage your Kubernetes configurations seamlessly, and by the end of this exercise, you will have created a simple but effective deployment and service configuration. 🚀

## Overview

Before we dive into the step-by-step process, let's take a moment to outline what you'll be implementing. Here’s a basic summary of the steps we'll be taking:

1. **Create a Namespace**: Set up a development namespace in your Kubernetes environment.
2. **Define a Deployment**: Configure a simple NGINX deployment.
3. **Create a Service**: Set up a service to expose your NGINX deployment.
4. **Create a Customization File**: Use a `customization.yaml` file to bundle your resources.
5. **Deploy Using Kustomize**: Apply your Kustomize project to the Kubernetes cluster.
6. **Clean Up**: Remove the resources when done.

Before going ahead, I encourage you to attempt implementing these steps on your own. Give it a try, and afterward, you can refer to the detailed guide below!

## Step-by-Step Guide

Now, let’s follow the baby steps to successfully create your first Kustomize project:

1. **Create the Development Namespace**:

   - Create a file named `dev.ns.yaml` with the following content:
     ```yaml
     apiVersion: v1
     kind: Namespace
     metadata:
       name: dev
     ```

2. **Define the NGINX Deployment**:

   - Next, create a file called `nginx-deployment.yaml` with:
     ```yaml
     apiVersion: apps/v1
     kind: Deployment
     metadata:
       name: nginx
       namespace: dev
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
               image: nginx:1.27.0
               ports:
                 - containerPort: 80
     ```

3. **Create the NGINX Service**:

   - Create another file named `nginx-svc.yaml`:
     ```yaml
     apiVersion: v1
     kind: Service
     metadata:
       name: nginx-svc
       namespace: dev
     spec:
       selector:
         app: nginx
       ports:
         - protocol: TCP
           port: 80
           targetPort: 80
     ```

4. **Create the Customization File**:

   - Now create `customization.yaml` with the following content:
     ```yaml
     apiVersion: kustomize.config.k8s.io/v1beta1
     kind: Kustomization
     resources:
       - dev.ns.yaml
       - nginx-deployment.yaml
       - nginx-svc.yaml
     ```

5. **Deploy your Customization**:

   - Run the following commands in your terminal:
     ```bash
     kubectl apply -f dev.ns.yaml
     kubectl kustomize . | kubectl apply -f -
     ```

6. **Clean Up the Resources**:
   - To delete the resources, use:
     ```bash
     kubectl delete -k .
     ```

And that’s it! You've set up your first Kustomize project!

## Conclusion

You’ve just unlocked the door to managing Kubernetes manifests more effectively with Kustomize! 🎉 Remember, this is just the beginning, and there are many more capabilities to explore. Keep experimenting and practicing, and you’ll be a Kustomize pro in no time. Don’t hesitate to revisit this guide or seek out further resources to deepen your understanding.
