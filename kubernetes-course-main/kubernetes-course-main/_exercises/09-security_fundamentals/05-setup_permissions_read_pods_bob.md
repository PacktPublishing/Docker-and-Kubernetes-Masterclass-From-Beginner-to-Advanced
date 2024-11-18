# Implementing Read-Only Permissions for Bob in Kubernetes

## Overview

In this exercise, we will be focusing on implementing read-only access for a user named Bob, specifically allowing him to view Pods and ConfigMaps in a designated namespace within Kubernetes. The key steps to achieve this are:

1. Create the necessary namespaces (dev and prod).
2. Define a Pod in each namespace.
3. Create a role that grants Bob read access to Pods in the dev namespace only.
4. Bind that role to Bob so he can access the Pods.
5. Verify that Bob can view the Pods in the dev namespace but not create or modify them.

Before moving on to the guide, I encourage you to try implementing the solution yourself. Give it a shot! 💪

## Step-by-Step Guide

1. **Create Namespaces:**

   - Start by creating two namespaces: `dev` and `prod`. You can use the following YAML definition:
     ```yaml
     apiVersion: v1
     kind: Namespace
     metadata:
       name: dev
     ---
     apiVersion: v1
     kind: Namespace
     metadata:
       name: prod
     ```
   - Apply the configuration using `kubectl apply -f namespace.yaml`.

2. **Define Pods:**

   - In the `dev` namespace, create a Pod using an image like `nginx`. Similarly, create a Pod in the `prod` namespace.
   - Here's an example of how your Pods YAML file might look:
     ```yaml
     apiVersion: v1
     kind: Pod
     metadata:
       name: nginx
       namespace: dev
     spec:
       containers:
         - name: nginx
           image: nginx:1.27.0
           ports:
             - containerPort: 80
     ---
     apiVersion: v1
     kind: Pod
     metadata:
       name: nginx
       namespace: prod
     spec:
       containers:
         - name: nginx
           image: nginx:1.27.0
           ports:
             - containerPort: 80
     ```

3. **Create Role for Bob:**

   - Define a Role that allows read-only access to Pods in the dev namespace.
   - Your `role.yaml` could look like this:
     ```yaml
     apiVersion: rbac.authorization.k8s.io/v1
     kind: Role
     metadata:
       namespace: dev
       name: pod-reader
     rules:
       - ApiGroups: ['']
         Verbs: ['get', 'list']
         Resources: ['pods']
     ```
   - Apply the role with `kubectl apply -f role.yaml`.

4. **Create Role Binding for Bob:**

   - Now, create a RoleBinding to associate the role with Bob. Your binding file might look like this:
     ```yaml
     apiVersion: rbac.authorization.k8s.io/v1
     kind: RoleBinding
     metadata:
       name: pod-reader-binding
       namespace: dev
     subjects:
       - kind: User
         name: Bob
         apiGroup: rbac.authorization.k8s.io
     roleRef:
       kind: Role
       name: pod-reader
       apiGroup: rbac.authorization.k8s.io
     ```
   - Apply with `kubectl apply -f rolebinding.yaml`.

5. **Test Permissions:**
   - Switch to Bob’s context with `kubectl config use-context Bob`.
   - Test if Bob can retrieve Pods with `kubectl get pods -n dev`. He should be able to see the Pods but won't have permissions to create or edit them.

## Conclusion

You've successfully implemented read-only permissions for Bob, allowing him to access Pods within the `dev` namespace. This skill is essential as you continue to work with Kubernetes and manage user permissions effectively. Keep practicing and learning to further enhance your Kubernetes knowledge! 🚀
