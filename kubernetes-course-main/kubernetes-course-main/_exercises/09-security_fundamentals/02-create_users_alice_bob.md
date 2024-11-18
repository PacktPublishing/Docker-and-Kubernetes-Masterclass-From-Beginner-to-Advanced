# Creating Users: Alice and Bob in Kubernetes

Welcome! In today's session, we’re going to dive into creating users in Kubernetes by generating private keys and certificate signing requests for Alice and Bob. Let’s get our hands dirty with some practical steps! 🛠️

## Overview

In this exercise, we’ll implement the following steps to create users Alice and Bob:

1. **Install OpenSSL** if not already installed on your system.
2. **Generate RSA private keys** for both Alice and Bob.
3. **Create certificate signing requests (CSRs)** for Alice and Bob using their private keys.
4. **Prepare a CSR YAML file** to define the user attributes and signing settings in Kubernetes.
5. **Apply the CSR** using Kubernetes command-line tools.
6. **Approve the CSRs** to finalize user creation.
7. **Retrieve and save public certificates** for Alice and Bob.

Take a moment to try these steps on your own before checking the guided instructions below. It’s a great way to learn by doing!

## Step-by-Step Guide

Here’s a concise guide to help you through the implementation:

1. **Install OpenSSL** on your machine. You can find installation instructions online if you don't have it.
2. Open your terminal and generate Alice’s private key:
   ```bash
   openssl genrsa -out alice.key 2048
   ```
3. Do the same for Bob:
   ```bash
   openssl genrsa -out bob.key 2048
   ```
4. Create a certificate signing request for Alice:
   ```bash
   openssl req -new -key alice.key -out alice.csr -subj "/CN=Alice/O=admins"
   ```
5. Repeat for Bob:
   ```bash
   openssl req -new -key bob.key -out bob.csr -subj "/CN=Bob/O=dev"
   ```
6. Open your IDE and create a file named `CSR.yaml`. Add the necessary YAML configuration to define both CSRs, including the signer name and expiration settings.
7. Apply the CSR file in Kubernetes:
   ```bash
   kubectl apply -f CSR.yaml
   ```
8. Approve the CSRs:
   ```bash
   kubectl certificate approve alice
   kubectl certificate approve bob
   ```
9. Retrieve Alice’s certificate:
   ```bash
   kubectl get csr alice -o jsonpath='{.status.certificate}' | base64 --decode > alice.crt
   ```
10. Repeat for Bob to get his certificate:
    ```bash
    kubectl get csr bob -o jsonpath='{.status.certificate}' | base64 --decode > bob.crt
    ```

## Conclusion

Congratulations! You’ve successfully created users Alice and Bob in your Kubernetes environment by generating private keys and CSRs. This process is crucial for managing user authentication in Kubernetes. Keep exploring and practicing, as understanding user management will take your skills to the next level! 🚀
