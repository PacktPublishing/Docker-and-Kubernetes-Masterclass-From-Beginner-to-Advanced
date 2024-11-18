# Understanding Role-Based Access Control in Kubernetes

## Overview

In this exercise, we will be exploring the concept of Role-Based Access Control (RBAC) in Kubernetes, which is crucial for managing user permissions and access to resources within your cluster. We will manually set up two users—Alice and Bob—using x509 certificates as their authentication method, and we will see how to connect users to roles through contexts and role bindings.

Before diving into the step-by-step guide, I encourage you to try implementing the solution on your own! Here’s a quick summary of the main steps to give you a head start:

1. Create a directory for your Kubernetes setup.
2. Generate x509 certificates for the users Alice and Bob.
3. Set up Kubernetes contexts for the users to connect to the cluster.
4. Create cluster roles and bind them to the users.
5. Validate the setup by testing user permissions within the cluster.

Give it a shot! After you’ve had a go, refer to the step-by-step guide below. 🛠️

## Step-by-Step Guide

1. **Create a Directory**:

   - Open a terminal and create a new folder for your Kubernetes setup.

2. **Generate x509 Certificates**:

   - Use OpenSSL to generate client certificates for Alice and Bob. Make sure to correctly specify the details such as common name (CN) and organization.

3. **Set Up Contexts**:

   - Create contexts in your Kubernetes configuration that reference the users Alice and Bob by their respective certificates.
   - Verify your current context with `kubectl config current-context`.

4. **Create Cluster Roles**:

   - Use `kubectl create clusterrole` to set up roles for users. For instance, you can create an admin role with various permissions.

5. **Create Cluster Role Bindings**:

   - Bind the cluster roles to Alice and Bob by creating appropriate role bindings, ensuring each user has the permissions defined in the earlier step.

6. **Test the User Permissions**:
   - Switch to each user context and validate their permissions by attempting actions within the cluster, such as deploying a pod or accessing secrets.

## Conclusion

In this lecture, we learned about the significance of RBAC in Kubernetes and how to set up and manage user access using contexts, roles, and bindings. By using x509 certificates, we mapped users to roles effectively, ensuring secure interactions with the Kubernetes API. This foundational understanding of RBAC is essential as you continue your journey in Kubernetes. Keep practicing these concepts to deepen your understanding! 🌟
