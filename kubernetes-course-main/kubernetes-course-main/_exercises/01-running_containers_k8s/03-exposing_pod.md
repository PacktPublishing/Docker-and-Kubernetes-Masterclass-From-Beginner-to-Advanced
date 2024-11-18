# Exposing Pods and Services in Kubernetes

Welcome! In this session, we'll dive into exposing pods and containers in Kubernetes by creating a service. This exercise will help you understand how to provide a stable endpoint for communication between pods, which is important since pod IP addresses can change frequently. Before we jump into the step-by-step guide, here’s a quick overview of what we’ll be doing. 🤓

## Overview

In this exercise, your goal is to expose a pod (in our case, an NGINX pod) so that it can be accessed via a stable name or IP address. Take a moment to try the following steps on your own before checking the detailed guide:

1. Ensure you have an NGINX pod running.
2. Use the `kubectl expose pod` command to create a service.
3. Check that the service has been created successfully.
4. Test accessing the service using its Cluster IP address and its name.
5. Clean up by deleting the service and pods after testing.

Give it a try! Remember, the practice is where the real learning happens. 🚀

## Step-by-Step Guide

Here’s a straightforward guide to help you through the process:

1. **List the running pods**:  
   Run `kubectl get pods` to confirm you have an NGINX pod up and running.

2. **Expose the NGINX pod**:  
   Use the command:

   ```bash
   kubectl expose pod <nginx-pod-name> --type=NodePort --port=80
   ```

   Replace `<nginx-pod-name>` with the actual name of your NGINX pod.

3. **Verify the service creation**:  
   Run `kubectl get services` to make sure your service was created successfully. You should see a reference to your NGINX service.

4. **Send a test request**:  
   Create another pod (such as an alpine pod) to test communication with your service. Inside the alpine pod, use curl:

   ```bash
   curl <service-cluster-ip>
   ```

   Additionally, you can use:

   ```bash
   curl <nginx-service-name>
   ```

   Both should return a response indicating the service is up.

5. **Clean up resources**:  
   After testing, don’t forget to delete your service and any pods you created:
   ```bash
   kubectl delete service <nginx-service-name>
   kubectl delete pod <alpine-pod-name>
   kubectl delete pod <nginx-pod-name>
   ```

## Conclusion

Congratulations on successfully exposing pods using services in Kubernetes! By creating a stable endpoint for communication, you can ensure your pods can interact without depending on ephemeral IP addresses. Keep practicing, and don’t hesitate to explore the various types of services available in Kubernetes for deeper knowledge. There’s always more to learn!
