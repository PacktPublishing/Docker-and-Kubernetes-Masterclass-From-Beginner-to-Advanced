# Creating Your Own Service Account in Kubernetes

Welcome to this guide on creating and managing your own service account in Kubernetes! 🌟 We’re diving into an essential aspect of Kubernetes that will empower you with more control over your cluster.

## Overview

In this exercise, we will create a service account named `pod inspector` and link it to a pod in the `dev` namespace. The key tasks to accomplish this are as follows:

1. Create a new YAML file for the service account.
2. Apply the YAML file to create the service account in Kubernetes.
3. Verify the creation of the service accounts in the specified namespace.
4. Modify the pod specification to use the new service account.
5. Test the permissions of the newly created service account by initiating an API request.

Take a moment to try out these steps on your own before looking at the detailed guide below. It's a great way to reinforce your learning!

## Step-by-Step Guide

1. **Create a New Directory**: Start by creating a folder named `service account` on your local machine (or your development environment).
2. **Create the Service Account YAML**:
   - Inside the `service account` folder, create a file named `pod_inspector.yaml`.
   - Populate that file with the following content:
     ```yaml
     apiVersion: v1
     kind: ServiceAccount
     metadata:
       name: pod-inspector
     ```
3. **Apply the YAML File**: Use the terminal to apply the YAML file:
   ```bash
   kubectl apply -f pod_inspector.yaml --namespace=dev
   ```
4. **List Service Accounts**: Verify that the service account has been created by running:
   ```bash
   kubectl get serviceaccounts --namespace=dev
   ```
5. **Modify the Pod Spec**: Update your pod specification file to include the `serviceAccountName`:
   ```yaml
   spec:
     serviceAccountName: pod-inspector
   ```
6. **Apply the Pod Specification**: Use the terminal to apply the updated pod file:
   ```bash
   kubectl apply -f your_pod_file.yaml --namespace=dev
   ```
7. **Test Service Account Permissions**: Once the pod is running, use `kubectl exec` to enter the pod:

   ```bash
   kubectl exec -it your-pod-name --namespace=dev -- /bin/sh
   ```

   Inside the pod, try to access the Kubernetes API with a curl command:

   ```bash
   curl -k --header "Authorization: Bearer $(cat /var/run/secrets/kubernetes.io/serviceaccount/token)" https://kubernetes.default.svc/api/v1/namespaces/dev/pods
   ```

8. **Grant Permissions to the Service Account**: If the API call failed, you’ll need to update your role binding:

   - Modify your role binding file to add the `pod inspector` service account as a subject.
   - Apply the role binding file.

9. **Re-test the API Call**: Repeat the API call from inside the pod to check if it succeeds this time.

## Conclusion

In this exercise, we successfully created a service account, linked it to a pod, and assigned it the necessary permissions to interact with the Kubernetes API. 🎉 This knowledge will significantly enhance your ability to manage your applications and services effectively in Kubernetes. Keep experimenting and building on what you’ve learned, and you’ll become quite proficient in Kubernetes in no time!
