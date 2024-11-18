# Implementing Dynamic Persistent Volumes in Stateful Sets

## Overview

In this exercise, we’re going to explore how to transition from statically provisioned persistent volumes to dynamically provisioned persistent volumes using Kubernetes Stateful Sets. You'll be able to modify your existing stateful set configuration to utilize dynamic provisioning, allowing Kubernetes to automatically manage the underlying storage resources for you. 📦

Before diving into the step-by-step guide, here’s a brief summary of the main steps you will try to implement:

1. Modify the existing stateful set file to change or comment out the storage class configuration.
2. Apply the updated stateful set file to your Kubernetes environment.
3. Verify that the persistent volume claims (PVCs) are successfully created and linked to the newly provisioned persistent volumes.
4. SSH into your mini cluster to confirm the creation of the directories for your persistent volumes.
5. Understand the behavior of persistent volumes when deleting a stateful set, ensuring data is retained.

Take a moment to try these steps on your own before looking at the detailed guide below. Let's see what you can come up with!

## Step-by-Step Guide

1. **Open your stateful set file**: Locate the configuration file used to create your stateful set.
2. **Update the storage class**: Change the existing storage class line to use the name `standard`, or comment it out if it’s currently present.
3. **Apply the changes**: Navigate to the folder containing your stateful set and apply the updated configuration using the command:
   ```sh
   kubectl apply -f <your-stateful-set-file>.yaml
   ```
4. **Check the status**: Confirm that the stateful set has created your desired number of replicas (e.g., two) by running:
   ```sh
   kubectl get pods
   ```
5. **Verify the persistent volume claims**: Run the following command to see the created PVCs and their statuses:
   ```sh
   kubectl get pvc
   ```
6. **SSH into mini cube**: Enter your mini cube environment to confirm the directories for each PVC are created. Use:
   ```sh
   minikube ssh
   ```
7. **Cleanup confirmation**: As a final exercise, test what happens to the PVCs and persistent volumes when you delete your stateful set by executing:
   ```sh
   kubectl delete statefulset <your-stateful-set-name>
   ```
8. **Examine the persistent volumes**: After deletion, verify that the PVCs remain using:
   ```sh
   kubectl get pvc
   ```

## Conclusion

By following these steps, you've successfully migrated your stateful set to utilize dynamically provisioned persistent volumes. This transition ensures that Kubernetes effectively manages storage resources, making your applications more flexible and resilient. Keep practicing these concepts, as they are foundational to effectively managing stateful applications in Kubernetes. If you have any questions or run into issues, don’t hesitate to reach out for help as you continue your learning journey! 🙌
