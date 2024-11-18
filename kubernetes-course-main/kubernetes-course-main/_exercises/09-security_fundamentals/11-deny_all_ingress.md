# Implementing Deny All Ingress in Kubernetes Network Policies

Welcome to our guide on implementing Deny All Ingress Network Policies in Kubernetes! In this exercise, we'll explore how to set up a Minikube cluster with Calico CNI and configure network policies to restrict incoming traffic to our applications. Before diving into the step-by-step instructions, let's see if you can tackle the challenge yourself! 💪

## Overview

In this exercise, your goal is to create a Minikube cluster using the Calico container network interface (CNI) and establish a network policy that denies all ingress traffic to a given application pod. Here's a quick overview of what you'll need to do:

1. Set up a Minikube cluster with the Calico CNI.
2. Create a deployment for the Color API application.
3. Create a service to expose the Color API.
4. Test connectivity to the Color API from a curl pod.
5. Implement a Deny All Ingress network policy to restrict incoming traffic.
6. Confirm that the ingress traffic is indeed blocked.

Give it a shot before checking out the detailed steps below!

## Step-by-Step Guide

1. **Create a Minikube Cluster:**

   - If you have an existing Minikube cluster, you can either stop or delete it.
   - Create a new Minikube cluster using the command: `minikube start --cni=calico --profile=network-policies` to ensure you're using the Calico CNI.

2. **Verify Pod Status:**

   - Use `kubectl get pods -n kube-system` to check the status of Calico pods and make sure they are all running.

3. **Create the Color API Deployment:**

   - Set up a deployment YAML file for the Color API using the version 1.2.0 or below.
   - Use the image `lmacademy/color-api:1.2.0`.

4. **Expose the Color API with a Service:**

   - Create a service YAML file for the Color API with port configurations set to 80.

5. **Test Connectivity:**

   - Create a curl pod using the image `lmacademy/outpine-curl:1.0.0`.
   - Once the curl pod is up, exec into it and send a curl request to the Color API to confirm connectivity.

6. **Create the Deny All Ingress Policy:**

   - Write a `deny-all.yaml` file defining the network policy to deny ingress traffic.
   - Ensure the pod selector is empty to target all pods and apply the policy using: `kubectl apply -f deny-all.yaml`.

7. **Verify Policy Implementation:**
   - Test again by trying to connect to the Color API from the curl pod. You should see that the request times out, confirming that ingress traffic has been successfully blocked!

## Conclusion

Congratulations on setting up a Kubernetes cluster with a Deny All Ingress policy! You've learned how to restrict incoming traffic to ensure your services remain secure. Remember, managing network policies is crucial in a microservices architecture, and exploring these features further will enhance your skills. Keep experimenting and practicing! 🚀
