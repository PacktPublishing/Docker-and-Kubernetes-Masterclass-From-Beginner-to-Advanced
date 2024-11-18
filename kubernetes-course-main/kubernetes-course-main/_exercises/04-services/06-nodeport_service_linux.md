# NodePort Service Implementation Guide

Welcome to the NodePort service implementation guide! In this session, we will explore how to use NodePort services in Kubernetes running on Linux machines. 🐳 Get ready to dive into this concept and see a practical use case for it.

## Overview

Before we jump into the step-by-step guide, here's a high-level summary of what you'll be trying to implement:

1. Confirm that you're working with a Linux machine.
2. Create a new directory named `services` for our configuration files.
3. Set up a Color API Deployment.
4. Create a NodePort Service for the Color API.
5. Apply the configurations using `kubectl`.
6. Test the NodePort service by sending requests to the service IP and port.

We encourage you to give this a try on your own before checking the detailed steps below! It's a great way to reinforce what you’ve learned.

## Step-by-Step Guide

Here’s how you can implement the NodePort service:

1. **Check Your OS**:

   - Confirm that you're on a Linux machine by running:
     ```bash
     cat /etc/os-release
     ```

2. **Create a Directory**:

   - Navigate to your preferred path and create a directory for storing the service files:
     ```bash
     mkdir services
     cd services
     ```

3. **Create the Deployment**:

   - Use a text editor to create a file named `color-api-deployment.yaml`:
     ```bash
     vi color-api-deployment.yaml
     ```
   - Insert your deployment configuration, save the file (in `vi`, press `i` to insert, then `ESC` followed by `:wq` to save and exit).

4. **Create the NodePort Service**:

   - Similarly, create a file named `color-api-nodeport-service.yaml`:
     ```bash
     vi color-api-nodeport-service.yaml
     ```
   - Paste your service configuration into the file and save it.

5. **Apply Your Configurations**:

   - Execute the following command to apply your deployments and services:
     ```bash
     kubectl apply -f .
     ```

6. **Test the Service**:
   - Retrieve your node's IP address:
     ```bash
     kubectl get nodes -o wide
     ```
   - Send a request to your Color API using `curl`, pointing to your node's internal IP and the NodePort (for example, `30007`):
     ```bash
     curl http://<node-ip>:30007
     ```

After following these steps, you should now have a functioning NodePort service!

## Conclusion

In this guide, we explored how to implement a NodePort service on Linux machines in a Kubernetes environment. You learned how to create a deployment, set up a service, and test your setup using `curl`. As you continue to delve deeper into Kubernetes, practicing these implementations will solidify your understanding and enhance your skills. Keep up the great work! 🚀
