# Egress Network Policies in Kubernetes

## Overview

In this exercise, we’ll dive into implementing egress network policies in Kubernetes, similar to what we've covered with ingress policies. The goal here is to restrict outbound traffic from your pods while allowing specific traffic to designated services, like your color API. Before looking at the step-by-step guide, I encourage you to try implementing the solution on your own! Here’s a brief outline of what you need to do:

1. **Deny all egress traffic** for your pods by applying a default deny all policy.
2. **Create a pod** that will use the egress rules.
3. **Allow outbound traffic** from the curl pod to the color API.
4. **Allow inbound traffic** from the curl pod to the color API.
5. **Ensure DNS resolution** works for your pods by allowing egress traffic to the CoreDNS service.

Now, let's see if you can tackle this on your own before checking out the detailed steps! 🚀

## Step-by-Step Guide

Here’s a clear breakdown to help you implement the egress policies:

1. **Deny All Egress Traffic:**

   - Create a file named `deny-all.yaml` (or a similar name), and define a policy that denies all outgoing traffic. Apply it to your cluster.

2. **Create Your Pod:**

   - Use the `curl.yaml` (or your equivalent) to create the curl pod. This will be your testing ground for network policies.

3. **Allow Egress to Color API:**

   - Create a YAML file for egress rules that allows traffic from your curl pod to your color API pods. Make sure to define the policy with the correct selectors.

4. **Allow Ingress from Curl Pod:**

   - Modify your color API policy to also permit traffic coming from the curl pod. Make sure you mirror the selectors accurately.

5. **Setup DNS Access:**

   - Adjust your egress policy to allow traffic to the CoreDNS service to ensure DNS resolution works for your pods.

6. **Test the Implementation:**
   - After applying all policies and recreating your pods, test the connectivity from the curl pod to the color API service and ensure DNS queries resolve correctly.

## Conclusion

In this lecture, we've explored how to implement egress network policies in Kubernetes. We started with a default deny-all approach and then created specific rules to allow traffic to the color API and DNS services as needed. Remember that understanding how to control pod communication is key to securing your Kubernetes environment. Keep practicing these concepts, and soon you'll feel more confident managing network policies in your deployments! 💻
