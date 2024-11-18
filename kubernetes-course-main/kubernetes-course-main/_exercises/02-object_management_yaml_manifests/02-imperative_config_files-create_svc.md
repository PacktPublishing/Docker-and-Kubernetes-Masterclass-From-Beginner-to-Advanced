# Creating Node Port Services in Kubernetes

## Overview

In this lesson, we'll be diving into how to create a Node Port service in Kubernetes using a configuration file. The goal is to understand the structure and components needed for your service and to practice creating one before you dive into the detailed guide. Here’s a summary of the main steps to implement the solution:

1. Create a configuration file for the service.
2. Define the API version and kind of object.
3. Set up the metadata section with the service name and labels.
4. Specify the service type as Node Port and define the ports.
5. Set up the selector to connect the service with the appropriate pods.
6. Deploy the service using the `kubectl create` command.

We encourage you to try implementing these steps yourself before checking the detailed instructions below! 😊

## Step-by-Step Guide

1. **Create a Configuration File:**
   - Start by creating a new file named `nginx-svc.yaml` (or similar).
2. **Define API Version and Kind:**

   ```yaml
   apiVersion: v1
   kind: Service
   ```

3. **Set Up Metadata:**

   ```yaml
   metadata:
     name: nginx
     labels:
       app: nginx
   ```

4. **Specify Service Type and Ports:**

   ```yaml
   spec:
     type: NodePort
     ports:
       - port: 80
         protocol: TCP
         targetPort: <target_port_here> # Replace with the correct port if needed
   ```

5. **Add Selector:**

   ```yaml
   selector:
     app: nginx
   ```

6. **Deploy the Service:**
   Run the command in your terminal:

   ```
   kubectl create -f nginx-svc.yaml
   ```

7. **Verify the Service:**
   Use the command `kubectl get services` to check that your service is up and running.

8. **Test Your Service:**
   Curl the service's IP address to validate that it's redirecting requests to the right pod!

## Conclusion

Great job on creating your Node Port service! 🎉 You have now learned how to define a service using a configuration file, including setting its metadata, specifications, and selectors. This knowledge equips you to manage your Kubernetes resources more effectively. Continue experimenting and practicing, as working with configuration files is a fundamental skill in Kubernetes management. Keep up the great work, and let's keep learning together!
