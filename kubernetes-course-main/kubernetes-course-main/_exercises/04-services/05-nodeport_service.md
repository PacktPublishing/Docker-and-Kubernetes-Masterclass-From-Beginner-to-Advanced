# NodePort Service in Kubernetes

## Overview

In this exercise, we're diving into the implementation of a NodePort service in Kubernetes. The goal is to enable external access to our applications running within the cluster, while understanding the differences between ClusterIP and NodePort services. Before peeking at the step-by-step guide, give the implementation a try yourself! Here’s a quick summary of the steps you should undertake:

1. Review the services and pods currently running in your cluster.
2. Create a new YAML file by copying the ClusterIP service definition.
3. Change the service type from ClusterIP to NodePort and set a specific port for external access.
4. Apply the new NodePort service configuration.
5. Test the service to confirm that you can access your pods from outside the cluster.

Are you ready? Let’s see how you can set this up on your own! 🚀

## Step-by-Step Guide

1. **Check Current Resources**:

   - Use the command `kubectl get pods` and `kubectl get services` to ensure everything is running smoothly in your cluster.

2. **Create NodePort Definition**:

   - In your IDE, create a new YAML file (or copy the existing ClusterIP service definition).
   - Change the service name to `node-port` and set the service type to `NodePort`.

3. **Set NodePort**:

   - Specifically indicate the port you want to expose (for example, use `30007`).

4. **Apply the New Service**:

   - In your terminal, run the command: `kubectl apply -f <filename>.yaml` to create the new NodePort service.

5. **Verify the Service**:

   - Check the services again with `kubectl get services` to confirm that the NodePort service is listed and has a cluster IP.

6. **Access the Service**:

   - If you’re using Minikube on Mac or Windows, run the command: `minikube service <service-name> --url` to get the URL for accessing your service.

7. **Test**:
   - Open your web browser and navigate to the service URL to see if you can communicate with your pods from outside the cluster.

## Conclusion

Congratulations on successfully setting up a NodePort service! 🎉 This task has illustrated how we can expose our applications to the outside world while contrasting it with the more restricted ClusterIP service. Remember, while NodePort is useful for development, managing security is essential when transitioning to production. Keep practicing and experimenting with Kubernetes, and you'll find yourself becoming more proficient in no time!
