# Understanding Permissions for Subresources in Kubernetes

## Overview

In this session, we dive into how permissions for subresources work within Kubernetes. In particular, we focus on the `nginx` pod and examine how to get specific resource information, such as logs and exec capabilities, while ensuring that users have the appropriate permissions.

Before jumping into the step-by-step guide, here’s a quick overview of what you'll be implementing:

1. Verify the pod details of your `nginx` deployment.
2. Attempt to retrieve logs and exec into the `nginx` pod, noting any permission errors.
3. Update the cluster role to include permissions for subresources (logs and exec).
4. Apply the new permissions using an admin account.
5. Test the access with the user to ensure everything works correctly.

Try to implement these steps on your own first! It’s a fantastic way to solidify your understanding before checking out the detailed guide below.

## Step-by-Step Guide

1. **Check Pod Details**: Open your terminal and run the command to retrieve details about your `nginx` pod:

   ```
   kubectl get pod nginx -n dev
   ```

2. **Retrieve Logs**: Attempt to access the logs of the `nginx` pod:

   ```
   kubectl logs nginx -n dev
   ```

3. **Permission Error**: Note the forbidden error that occurs when trying to get logs, which indicates that logs are treated as a subresource.

4. **Attempt Exec**: Next, try to exec into the `nginx` container with:

   ```
   kubectl exec -it nginx -n dev -- /bin/sh
   ```

   Again, take note of the permission error.

5. **Update Cluster Role**: Modify the cluster role to include permissions for the log and exec subresources. Here’s an example of what this might look like in your YAML configuration:

   ```yaml
   # Add these lines to your pod admin role definition
   resources:
     - pods/log
     - pods/exec
     - pods/attach
   ```

6. **Apply Changes**: Switch to an admin user (e.g., the minikube super user) and apply your updated role:

   ```
   kubectl apply -f pod-admin.yaml
   ```

7. **Test Permissions**: Switch back to your regular user, Alice, and retry accessing the logs and exec commands:
   ```
   kubectl logs nginx -n dev
   kubectl exec -it nginx -n dev -- /bin/sh
   ```

If everything is configured correctly, you should be able to access both the logs and the interactive shell 🎉.

## Conclusion

Understanding how to manage permissions for subresources is crucial in Kubernetes. As we’ve seen, simply giving access to a primary resource (like a pod) might not be enough. By tweaking the cluster roles to include permissions for subresources like logs and exec, you ensure that users can perform the tasks they need to do, while maintaining security and control over sensitive operations. Keep practicing, and you'll become confident in managing these permissions!
