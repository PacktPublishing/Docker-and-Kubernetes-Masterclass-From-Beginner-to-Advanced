# Readiness Probes in Kubernetes

## Overview

In this exercise, we will dive into the concept of readiness probes in Kubernetes and how they affect the management of pods. The goal is to help you understand what happens when readiness probes fail and how to implement this feature in your deployments and services.

Here's a quick outline of what you'll aim to accomplish:

1. Create a deployment with readiness probes configured.
2. Set up a service that interfaces with the deployment.
3. Observe how failing readiness probes affect traffic routing to your pods.
4. Use a traffic generator to simulate traffic and observe the behavior of your deployment.

Before looking at the step-by-step guide, give it a shot on your own and see if you can implement the solution!

## Step-by-Step Guide

1. **Create a Deployment:**

   - Create a file named `color-api-deployment.yaml`.
   - Specify the API version and kind (Deployment).
   - Define metadata such as name and labels.
   - Set the replicas to 6.
   - Include container specifications and environment variables, ensuring to set the `fail-readiness` variable to true.

2. **Configure the Readiness Probe:**

   - In the deployment specification, set the readiness probe to query the `/ready` endpoint.
   - Configure the threshold and period settings for your readiness check.

3. **Create a Service:**

   - Create a service definition in the same or a separate YAML file.
   - Ensure your service selects the appropriate pods that match the deployment labels.

4. **Set Up a Traffic Generator:**

   - Create a separate YAML file for the traffic generator.
   - Configure parameters like the endpoint to hit and delays for traffic generation.

5. **Apply Your Configuration:**

   - Use `kubectl apply` to deploy your configurations to the Kubernetes cluster.
   - Check the status of your pods to see if they are healthy or unhealthy based on your readiness probes.

6. **Observe Traffic Routing:**

   - Use logs from the traffic generator to ensure it is only sending requests to healthy pods.
   - Verify that unhealthy pods are not receiving any traffic.

7. **Clean Up:**
   - Delete all resources you created for this exercise to maintain a clean environment.

## Conclusion

In this lecture, we explored readiness probes and their important role in ensuring that only healthy pods receive traffic. This feature is critical for maintaining the reliability of your applications running on Kubernetes. Remember, setting up these probes not only helps in automatic remediation but also improves user experience by avoiding service interruptions. Keep practicing, and you'll become more proficient with Kubernetes!
