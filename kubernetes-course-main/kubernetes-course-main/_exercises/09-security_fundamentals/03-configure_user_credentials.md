# Configuring User Credentials in Kubernetes

Welcome! In this session, we’ll focus on setting up user credentials in Kubernetes. This is a crucial step to ensure that you have different users, like Alice and Bob, who can interact with your Kubernetes cluster securely. Let’s dive in! 🚀

## Overview

Before we jump into the details, I encourage you to try implementing the solution yourself. Here’s a summarized list of the main steps to follow:

1. Locate your default kubeconfig file (usually found at `~/.kube/config`).
2. Create new contexts for users Alice and Bob within this kubeconfig.
3. Set credentials for each user by referencing their respective client key and client certificate.
4. Confirm that the new users are properly added to your kubeconfig.
5. Attempt to use the contexts for Alice and Bob and observe the current access limitations.

Give it a try! It’s a great opportunity to practice on your own before checking the step-by-step guide below.

## Step-by-Step Guide

1. **Locate Your Kubeconfig**: Use a terminal to find your default kubeconfig file. Typically, it’s at `~/.kube/config`.
2. **Create Context for Alice**:

   - Use the command:
     ```bash
     kubectl config set-context alice --cluster=minikube --user=alice
     ```

3. **Set Credentials for Alice**:

   - Reference Alice's client key and certificate:
     ```bash
     kubectl config set-credentials alice --client-key=path/to/alice.key --client-certificate=path/to/alice.crt
     ```

4. **Create Context for Bob**:

   - Use the command:
     ```bash
     kubectl config set-context bob --cluster=minikube --user=bob
     ```

5. **Set Credentials for Bob**:

   - Reference Bob's client key and certificate:
     ```bash
     kubectl config set-credentials bob --client-key=path/to/bob.key --client-certificate=path/to/bob.crt
     ```

6. **Switch Contexts**:

   - To check if the users are set up correctly, switch to each context:
     ```bash
     kubectl config use-context alice
     kubectl config use-context bob
     ```

7. **Test Access**: Attempt to list pods:
   ```bash
   kubectl get pods
   ```
   Expect an error indicating permission issues, as roles and bindings haven't been configured yet.

## Conclusion

Congratulations on nearly finishing the user setup process in Kubernetes! 🎉 You've learned how to create user contexts and set credential paths, which is essential for managing secure access to your cluster. Remember, this is just the beginning. In upcoming lectures, we will cover configuring permissions with roles and bindings, so stay tuned and keep practicing what you’ve learned!
