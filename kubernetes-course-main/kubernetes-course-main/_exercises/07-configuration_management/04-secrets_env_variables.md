# Working with Secrets in Kubernetes

Welcome to the exercise on working with secrets in Kubernetes! In this session, we're going to dive into how to create and manage secrets effectively and securely. 🚀 Before digging into the details, why not give it a shot yourself? Here’s a quick overview of what you should aim to implement:

## Overview

In this exercise, you’ll be implementing a solution that involves creating a Kubernetes secret and using that secret within a pod. Here are the main steps you should consider trying on your own:

1. Create a new secret using the `kubectl` command.
2. Validate that the secret is created successfully.
3. Set up a demo pod that uses the secret as environment variables.
4. Retrieve and log the secret values from within the pod.
5. Experiment with mounting the entire secret as environment variables.

Take a moment to try these steps before looking at the detailed guide below!

## Step-by-Step Guide

Now that you've had a go at it, let's walk through the detailed steps together:

1. **Create a Secret**  
   Use the following command to create your secret. Make sure to replace `DB_creds` with your preferred secret name and adjust the username and password according to your needs:

   ```bash
   kubectl create secret generic DB_creds --from-literal=username=DB_user --from-literal=password=DB_pass
   ```

2. **Check the Created Secret**  
   List the secrets to ensure that your new secret is on the list:

   ```bash
   kubectl get secret
   ```

3. **Describe the Secret**  
   To see the details without exposing the actual values:

   ```bash
   kubectl describe secret DB_creds
   ```

4. **Set Up a Demo Pod**  
   Create a YAML configuration for a pod using the secrets as environment variables. Here’s an example you can modify:

   ```yaml
   apiVersion: v1
   kind: Pod
   metadata:
     name: busybox
   spec:
     containers:
       - name: busybox
         image: busybox:1.36.1
         command: ['/bin/sh', '-c', 'echo $DB_USER && echo $DB_PASS']
         env:
           - name: DB_USER
             valueFrom:
               secretKeyRef:
                 name: DB_creds
                 key: username
           - name: DB_PASS
             valueFrom:
               secretKeyRef:
                 name: DB_creds
                 key: password
   ```

5. **Apply the Pod Configuration**  
   Execute the following command to create the pod with the specified configuration:

   ```bash
   kubectl apply -f your-pod-definition.yaml
   ```

6. **Check Logs**  
   After the pod is up and running, check the logs to see if the secret values were echoed successfully:

   ```bash
   kubectl logs busybox
   ```

7. **Optionally, Mount Entire Secret**  
   If you want to mount the entire secret as environment variables, modify your YAML file accordingly.

## Conclusion

In this lesson, we've explored the importance of managing Kubernetes secrets securely. We created a secret and accessed its values within a pod through environment variables. Remember, secrets are sensitive information, and handling them appropriately is crucial to ensure your applications remain secure. Keep practicing these techniques, and you’ll become more proficient in managing secrets and configurations in Kubernetes! 🌟
