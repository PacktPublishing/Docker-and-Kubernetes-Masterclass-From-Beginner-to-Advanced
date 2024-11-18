# Implementing Resource Requests and Limits in Kubernetes Deployments

## Overview

In this exercise, we will explore how to create a Kubernetes deployment while ensuring that resource requests and limits are effectively managed. This is crucial for preventing resource exhaustion in your cluster’s namespace.

Before looking at the step-by-step guide, here's what you'll need to do:

1. Create a Kubernetes deployment with a specified number of replicas.
2. Set appropriate resource requests and limits for the containers in your deployment.
3. Understand the implications of resource quotas on your deployment updates.
4. Simulate an update to your deployment image and manage the rollout process while adhering to resource quotas.

We encourage you to try these steps on your own before referring to the detailed guide below! 💪

## Step-by-Step Guide

1. **Create a Deployment**:

   - Define your deployment using `apps/v1`.
   - Name it `caller API deployment` and set the namespace to `dev`.
   - Set the replica count to a manageable number, like 4.

2. **Configure Metadata**:

   - Assign labels and define metadata for your deployment template.
   - Ensure the `selector` matches your deployment's labels.

3. **Set Resource Requests and Limits**:

   - For each pod, specify CPU and memory requests and limits, keeping within your resource quota (e.g., 200m CPU and 256Mi memory).

4. **Apply Changes**:

   - Use the terminal to apply your changes.
   - First, create the namespace, then the deployment.

5. **Update Deployment**:

   - Change the image version in your deployment configuration.
   - Attempt to apply the update and monitor the rollout status.

6. **Handle Resource Quotas**:

   - If the rollout fails due to exceeded quotas, review and adjust your resource specifications accordingly.

7. **Clean Up**:
   - Once you’re done experimenting, clean up your resources to keep your environment tidy.

## Conclusion

In this lecture, we have discussed the importance of managing resource requests and limits when deploying applications in Kubernetes. Understanding how to effectively use resource quotas will help you prevent deployment issues and ensure smooth application rollouts. Remember, always monitor your resource usage and keep learning as you go! 🌟
