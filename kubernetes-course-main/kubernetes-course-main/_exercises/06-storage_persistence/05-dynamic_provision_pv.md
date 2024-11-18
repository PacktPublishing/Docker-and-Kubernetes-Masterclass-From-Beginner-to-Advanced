# Dynamic Provisioning of Persistent Volumes in Kubernetes

Welcome to our guide on dynamically provisioning persistent volumes using Minikube! 🚀 In this exercise, we'll dive into the process of creating persistent volumes on-demand, making it easier for us to manage storage in our applications. Before we get into the nitty-gritty of the steps, let's give you a chance to try it out on your own.

## Overview

In this exercise, your main goal is to implement dynamic provisioning of persistent volumes using the `standard` storage class that Minikube provides by default. Here’s a quick summary of the steps you should try to follow:

1. Describe the default storage class using `kubectl`.
2. Create a persistent volume claim (PVC) without specifying a storage class.
3. Apply your PVC definition to the cluster.
4. Inspect the automatically created persistent volume associated with your PVC.
5. Test deleting the PVC and observe what happens to the persistent volume.
6. Explore options for changing the reclaim policy if necessary.

Give these steps a shot before peeking at the step-by-step guide below!

## Step-by-Step Guide

Now, let's go through the steps in detail:

1. **Inspect the Storage Class**:

   - Run the command: `kubectl describe storageclass standard` to see the default storage class and its properties, including the reclaim policy.

2. **Create a Persistent Volume Claim**:

   - Create a new file called `dynamic.yaml` in your IDE under the `storage/persistence` folder.
   - Copy the PVC definition from an existing example but modify the name to something like `dynamic-pv-example`.
   - Do not specify a storage class in this claim.

3. **Apply the PVC**:

   - Open your terminal and run: `kubectl apply -f dynamic.yaml`. This will create your persistent volume claim.

4. **Check the PVC Status**:

   - Run: `kubectl get pvc` to check the status of your claim; it should show as "Bound."

5. **Describe the Associated Persistent Volume**:

   - Find the name of the bound persistent volume and run: `kubectl describe pv <volume-name>`. This displays details about the volume.

6. **Test the Deletion Process**:

   - Delete the PVC using: `kubectl delete -f dynamic.yaml`.
   - Check the persistent volumes again with: `kubectl get pv` to confirm that it has been deleted.

7. **Reclaim Policy Consideration**:
   - If you're curious about changing the reclaim policy, refer back to the storage class and consider adjusting the reclaim policy from 'Delete' to 'Retain' in future applications.

## Conclusion

Awesome job exploring the dynamic provisioning of persistent volumes! 🛠️ This feature not only automates the management of storage but also enhances your efficiency when working with Kubernetes. Remember, understanding how to manage persistent volumes dynamically is crucial for maintaining applications in production environments. Keep practicing and don't hesitate to experiment with other scenarios!
