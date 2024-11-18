# Kubernetes Fundamentals: Implementing Cluster IP Services

## Overview

In this exercise, we're going to focus on creating a Cluster IP service in our cluster, which will help us manage internal communication effectively.

### Try to Implement the Following Steps:

1. Create a YAML file for your Cluster IP service.
2. Define the service metadata, including the name and labels.
3. Specify the pod selector that the service will use to route traffic.
4. Set the service ports and ensure the type is defined as Cluster IP.
5. Apply the service configuration using `kubectl apply`.
6. Verify that the service is running and check its stable IP address.
7. Update your traffic generator to point to the service's Cluster IP.
8. Monitor the traffic and observe how it handles pod changes and load balancing.

Take a moment to go through these steps on your own before checking the detailed guide below. It’s a great way to reinforce your learning! 💪

## Step-by-Step Guide

1. **Create a YAML File**:

   - Navigate to your services folder in the IDE.
   - Create a new file named `color-api-cluster-ip.yaml`.

2. **Define Service Metadata**:

   - Set the API version to `v1`.
   - Define the kind as `Service`.
   - Add the name under the metadata section as `color-api-cluster-ip` and include labels such as `app: color-api`.

3. **Set Pod Selector**:

   - Under the `spec` section, add a `selector` that matches the labels of your pods (e.g., `app: color-api`).

4. **Specify Service Ports**:

   - Define the ports section and set both the service and port values to `80`. Explicitly mention the service type as `ClusterIp`.

5. **Apply the Configuration**:

   - Save your file.
   - In the terminal, apply the configuration with:
     ```bash
     kubectl apply -f color-api-cluster-ip.yaml
     ```

6. **Verify the Service**:

   - Check that the service is running by executing:
     ```bash
     kubectl get svc
     ```

7. **Update Traffic Generator**:

   - Open your traffic generator file.
   - Replace the pod IP address with the Cluster IP of your service.
   - Save the changes and apply it in the terminal:
     ```bash
     kubectl apply -f traffic-generator.yaml
     ```

8. **Monitor Logs**:
   - Follow the logs to see how the traffic is handled and the load balancing in action.

## Conclusion

In this session, we learned how to set up a Cluster IP service in Kubernetes, enabling efficient internal communication within our cluster. Remember, using the service name instead of the Cluster IP allows for more stability, especially during pod or service restarts. Keep experimenting with what you've learned and continue to practice these concepts! 🚀
