# Passing Secrets as Files and Volume Mounts in Kubernetes

## Overview

In this exercise, we will explore how to securely pass secrets to our containers in Kubernetes by using volume mounts. The goal is to understand how to create a volume definition, mount it to the container, and manage access to the secret values appropriately. Before diving into the step-by-step guide, here’s a brief outline of what you'll be trying to implement:

1. Remove unneeded commands and set up a basic container that runs for a while.
2. Define a volume in the pod specification to hold your secrets.
3. Mount the volume to the container at the desired path.
4. Access the secrets to ensure they have been correctly mounted.
5. Explore how to limit access to the secrets for better security.

Take a moment to think through these steps and see if you can implement the solution on your own before checking the detailed guide below! 🚀

## Step-by-Step Guide

1. **Create a Basic Pod Configuration**:

   - Define a pod that uses a base image like BusyBox and runs a sleep command to keep it alive.

2. **Add Volume Definition**:

   - Under the pod specification, create a volumes section and define your secret volume. For example:
     ```yaml
     volumes:
       - name: db-secrets
         secret:
           secretName: db-creds
     ```

3. **Mount the Volume**:

   - Inside the container specification, add a volume mount that specifies where the secrets will be available:
     ```yaml
     volumeMounts:
       - name: db-secrets
         mountPath: /etc/db
     ```

4. **Deploy the Pod**:

   - Use `kubectl apply -f <your-pod-file>.yaml` to create the pod and then check its status with `kubectl get pods`.

5. **Access the Pod**:

   - Use `kubectl exec -it <pod-name> -- /bin/sh` to get a shell in the container.
   - Navigate to `/etc/db` to verify if the secrets are mounted correctly, and use `cat` to read their contents.

6. **Delete the Pod and Secrets**:
   - Once you’re done testing, clean up by deleting the Pod and any secrets you’ve created using `kubectl delete pod <pod-name>` and `kubectl delete secret db-creds`.

## Conclusion

In this lecture, we’ve covered how to pass secrets to containers in Kubernetes using volume mounts. You’ve learned about securely managing your secrets and the importance of controlling who has access to them. Remember that managing permissions is critical to maintaining the security of your applications. Keep practicing these concepts as you dive deeper into Kubernetes!
