# Updating Pod Templates in Kubernetes

## Overview

In this exercise, we will focus on updating a pod template in Kubernetes from an older image version to a newer one. Your goal is to implement the following changes using your IDE before reviewing the step-by-step guide:

1. Open your IDE and locate the pod template image.
2. Update the image version from `1.27.0` to `1.27.0-alpine`.
3. Review the changes that will occur using the `kubectl apply` command.
4. Monitor the pods and replica sets to track the changes during the update process.
5. Confirm that the new image version is applied correctly.

I encourage you to try implementing these steps on your own before diving into the detailed guide below! 🚀

## Step-by-Step Guide

Let's walk through the steps to update your pod template:

1. **Open your IDE**: Launch your integrated development environment and access the pod template file.
2. **Update the Image**: Scroll to the image declaration and change the version from `1.27.0` to `1.27.0-alpine`.

3. **Identify Changes**: Use the command `kubectl apply --dry-run=client -f <your-deployment-file>.yaml` to see what changes will be applied without actually making them.

4. **Prepare the Terminal**: Split your terminal into two or three instances. Use one to monitor pods, one for replica sets, and one for executing commands.

5. **View Existing Pods and Replica Sets**: Execute the following commands:

   - `kubectl get pods` to watch the current pods.
   - `kubectl get rs` to watch the current replica sets.

6. **Apply Changes**: Run the command `kubectl apply -f <your-deployment-file>.yaml` to apply your updates.

7. **Monitor Logs**: Observe the logs and the changes in the pods and replica sets as the rolling update occurs.

8. **Describe the Deployment**: Execute `kubectl describe deploy <your-deployment-name>` to review the events and confirm the updates.

9. **Confirm the New Image**: Use `kubectl get pods` and then `kubectl describe pod <pod-name>` to check that the new image version is correctly applied.

## Conclusion

You've successfully updated your pod template in Kubernetes and monitored the changes through a rolling update! 🎉 This exercise is critical for understanding how Kubernetes manages deployments and updates. Remember, practice is key! Keep experimenting with different configurations and commands to deepen your understanding.
