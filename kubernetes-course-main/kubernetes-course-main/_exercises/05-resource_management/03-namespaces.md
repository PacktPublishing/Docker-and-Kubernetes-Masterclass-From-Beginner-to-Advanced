# Introduction to Namespaces in Kubernetes

Welcome! In this session, we’ll explore the fundamental concept of namespaces in Kubernetes, focusing on how to isolate and manage resources within a cluster. As you get started, it's a great opportunity to practice implementing these ideas on your own before looking through the detailed steps. Are you ready? Let's dive in!

## Overview

In this exercise, you'll learn how to create and manage namespaces in a Kubernetes cluster. By working through this, you'll understand how to use namespaces to organize resources effectively. Here’s a brief outline of the steps you should try on your own before checking the detailed guide:

1. **Create a namespace**: Define a new namespace through a YAML file.
2. **Apply changes**: Use the `kubectl apply -f` command to create this namespace in the cluster.
3. **Create a pod within the namespace**: Define and deploy a new pod inside your created namespace.
4. **Set the current context**: Change the current context to operate under the new namespace without needing to specify it in every command.
5. **Delete the namespace**: Finally, remove the namespace and understand the implications of this action.

Give these steps a go! It’s a great chance to solidify your understanding before proceeding further.

## Step-by-Step Guide

1. **Create a Namespace**:

   - Open your IDE and create a new file named `dev-ns.yaml`.
   - Add the following content:
     ```yaml
     apiVersion: v1
     kind: Namespace
     metadata:
       name: dev
     ```
   - Save the file.

2. **Apply the Namespace**:

   - In your terminal, navigate to the folder with your YAML file.
   - Run the command:
     ```bash
     kubectl apply -f dev-ns.yaml
     ```

3. **Verify the Namespace**:

   - Execute:
     ```bash
     kubectl get namespaces
     ```
   - You should see `dev` added to the list of namespaces.

4. **Create a Pod in the Namespace**:

   - In the IDE, create another file called `color-api-pod.yaml` with the following content:
     ```yaml
     apiVersion: v1
     kind: Pod
     metadata:
       name: color-api
       namespace: dev
     spec:
       containers:
         - name: color-api
           image: your-docker-repo/color-api:1.1.0
           ports:
             - containerPort: 80
     ```
   - Save the file and apply it:
     ```bash
     kubectl apply -f color-api-pod.yaml
     ```

5. **Check the Pod Status**:

   - To view the pods specifically in the `dev` namespace, run:
     ```bash
     kubectl get pods -n dev
     ```

6. **Set the Current Namespace Context**:

   - Use the command:
     ```bash
     kubectl config set-context --current --namespace=dev
     ```

7. **Describe the Pod without Specifying Namespace**:

   - Now you can simply run:
     ```bash
     kubectl describe pod color-api
     ```

8. **Delete the Namespace**:
   - When you are sure about what you want to delete, execute:
     ```bash
     kubectl delete -f dev-ns.yaml
     ```

## Conclusion

Great job! You have successfully navigated through creating and managing namespaces in Kubernetes. Remember, namespaces serve as a crucial mechanism for resource isolation—be cautious, especially when deleting them, as you might lose valuable resources. 🌟

Keep experimenting with namespaces, and don't hesitate to explore further options like Role-Based Access Control (RBAC) to manage and secure your namespaces efficiently. Happy learning!
