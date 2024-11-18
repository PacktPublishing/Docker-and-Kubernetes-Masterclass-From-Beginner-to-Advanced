# Managing Persistent Volumes and Claims in Kubernetes

## Overview

In this exercise, we’ll explore the implications of deleting Persistent Volume Claims (PVCs) and Persistent Volumes (PVs) in a Kubernetes environment. Before diving into the step-by-step guide, take some time to think through the following main actions you’ll want to implement:

1. List your current Pods, PVCs, and PVs.
2. Delete the Pods using the appropriate command.
3. Delete the Persistent Volume Claim.
4. Check the status of the Persistent Volume after deleting the PVC.
5. Assess whether files remain accessible after deleting the PV and PVC.

I encourage you to try implementing this yourself first before checking out the detailed steps below. It's a great way to reinforce your learning! 😊

## Step-by-Step Guide

1. **List Existing Resources**: Start by using the command `kubectl get pods pv pvc` to see your existing Pods, PVCs, and PVs.
2. **Delete the Pods**: Use the command `kubectl delete pod <pod-name-1> <pod-name-2>` to delete both Pods. Be sure to replace `<pod-name-1>` and `<pod-name-2>` with your actual Pod names, and include the `--force` flag to ensure they’re deleted.

3. **Delete the Persistent Volume Claim**: Execute `kubectl delete pvc <pvc-name>` to remove the Persistent Volume Claim.

4. **Check the Status of the Persistent Volume**: Run `kubectl get pv` to see that the status of the Persistent Volume has changed to 'Released'. Remember, with the retained policy, this PV will not be automatically available for use again.

5. **Verify File Persistence**: Use `minikube ssh` and navigate to the directory where you mounted the volume to check if your files (like `hello.txt`) are still present.

6. **Delete Everything (Optional)**: If you choose to delete everything, use `kubectl delete pod <pod-name> --force` for the Pod along with `kubectl delete pvc <pvc-name>` to remove the PVC and check that the PV no longer exists.

## Conclusion

Today, we delved into what happens when we delete Persistent Volume Claims and Persistent Volumes in Kubernetes. We highlighted that while deleting a PVC affects its associated volume's status, files may still persist based on the configuration. Understanding these nuances is crucial for managing data effectively in your Kubernetes clusters. As you continue your journey with Kubernetes, keep practicing these concepts, as hands-on experience will greatly enhance your understanding and skills—keep it up! 🚀
