# Understanding the Shortcomings of Updating Pods with Replica Sets

## Overview

In this exercise, we will delve into the challenges and limitations of using replica sets for managing updates and pods in Kubernetes. Before diving into the step-by-step guide, I encourage you to try implementing the solution yourself. Here’s a quick summary of what you'll be tackling:

1. Verify that your replica set and pods are running.
2. Modify the replica set configuration to update the image.
3. Use the `kubectl apply` command to apply the changes.
4. Monitor the pod and replica set status to see what happens.
5. Explore how to properly update the pods by deleting the existing ones.

Give it a shot, and let's see how far you can get before checking the guide! 🚀

## Step-by-Step Guide

1. **Check Running Pods**: Begin by confirming that your replica set and the corresponding pods are operational. You can do this by running:

   ```bash
   kubectl get pods
   kubectl get replicaset
   ```

2. **Update the Image**: Modify the replica set configuration file to change the image version (e.g., from `1.27` to `1.27.0-alt-pine`).

3. **Apply the Changes**: Use the following command to apply your changes:

   ```bash
   kubectl apply -f <your_replica_set_file.yaml>
   ```

4. **Monitor Changes**: In a new terminal, run the following commands to watch for changes in pods and the replica set:

   ```bash
   kubectl get pod --watch
   kubectl get replicaset --watch
   ```

5. **Investigate Pod Status**: After applying your changes, check the pod status. Use the command:

   ```bash
   kubectl describe pod <pod_name> | grep Image
   ```

   This will show you which image is currently being used by the pod.

6. **Delete Existing Pods**: Since the changes won't take effect automatically, delete one of the existing pods:

   ```bash
   kubectl delete pod <pod_name>
   ```

7. **Watch for New Pod Creation**: Once a pod is deleted, the replica set should automatically create a new pod with the updated image.

8. **Confirm the New Image**: Finally, check that the new pod is indeed running the updated image:
   ```bash
   kubectl describe pod <new_pod_name> | grep Image
   ```

## Conclusion

In this exercise, we've explored how replica sets handle pod updates and the necessity of deleting existing pods to apply new configurations. Remember, relying solely on replica sets can complicate the update process, which is why Kubernetes uses higher abstractions like deployments to facilitate smoother updates. Keep experimenting and practicing, as hands-on experience is key to mastering Kubernetes!
