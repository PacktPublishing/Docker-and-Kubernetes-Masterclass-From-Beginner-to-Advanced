# Understanding Failed Rollouts in Kubernetes

## Overview

In this exercise, we will delve into what happens when a Kubernetes deployment encounters an invalid configuration, specifically focusing on how it affects pod status and the deployment itself. The goal is to understand how to troubleshoot these issues effectively. Before you look at the detailed guide, try to implement the solution based on the following steps:

1. Create a deployment with an intentionally invalid image tag.
2. Describe the deployment to check the status of the pods.
3. Investigate the individual pods to identify error messages.
4. Roll back the deployment to the previous working version if necessary.
5. Correct the invalid configuration and reapply the deployment.

Give this a shot before diving into the step-by-step guide! You might surprise yourself with what you can accomplish. 🎉

## Step-by-Step Guide

1. **Create an Invalid Deployment**:

   - Intentionally set an incorrect image tag in your deployment YAML file, e.g., forget a dot in the tag.

2. **Apply Your Configuration**:

   - Use the command `kubectl apply -f <your-deployment-file>.yaml` to apply the invalid deployment.

3. **Check Deployment Status**:

   - Run `kubectl describe deployment <your-deployment-name>` to get an overview of the deployment's status.

4. **Investigate Pod Errors**:

   - List all pods with `kubectl get pods`. Look for any pods showing an "ImagePullBackOff" status.
   - Use `kubectl describe pod <pod-name>` to get detailed error messages.

5. **Identify the Issue**:

   - Look for messages indicating issues with image pulls or invalid tags, making a note of any errors.

6. **Roll Back Deployment (if necessary)**:

   - If things go awry during deployment, run `kubectl rollout undo deployment/<your-deployment-name>` to revert to the previous version.

7. **Fix the Invalid Configuration**:

   - Correct the image tag in your YAML configuration file.

8. **Reapply the Deployment**:

   - Run `kubectl apply -f <your-deployment-file>.yaml` again to apply the corrected configuration.

9. **Check Your Work**:
   - Verify that the deployment is now healthy by checking pod statuses and using `kubectl rollout status deployment/<your-deployment-name>`.

## Conclusion

By working through these steps, you've explored how Kubernetes handles invalid configurations and learned several methods for troubleshooting deployment issues. Remember, the key takeaway is knowing how to leverage the rolling update strategy effectively to minimize downtime and ensure smoother deployments. Keep experimenting and practicing these concepts to enhance your Kubernetes skills. You're doing great! 🌟
