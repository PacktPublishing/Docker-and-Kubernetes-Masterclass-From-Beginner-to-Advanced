# Implementing Network Policies to Allow Traffic in Kubernetes

## Overview

In this exercise, we aim to implement a network policy that specifically allows traffic from certain pods with the label `app: curl` to interact with our application pods labeled `app: color API`. This is a great opportunity to enhance your understanding of Kubernetes network policies! Before diving into the step-by-step guide, try to outline the solution yourself by following these main steps:

1. Define a new network policy resource named `allow curl`.
2. Set the API version and specify the kind of resource you'll be creating.
3. Specify the metadata for your network policy.
4. Define the pod selector to match the labels for the pods you want to control.
5. Establish your ingress rules that define what is allowed to access your application pods.
6. Apply your network policy and test the configuration with curl commands.

Give it a shot, and once you’re ready, check out the detailed step-by-step guide below! 🚀

## Step-by-Step Guide

1. **Create a YAML file**: Start by creating a file named `allow_curl.yaml`.
2. **Define the API version**: Set the API version to `networking.k8s.io/v1`.
3. **Set the kind**: Specify the kind of the resource as `NetworkPolicy`.
4. **Add metadata**: Under metadata, add a name field with the value of `allow curl`.
5. **Define the spec**: In the spec section, include a pod selector to match the pod labels, setting it to `app: color API`.
6. **Set the policy type**: Specify the policy type as `Ingress`.
7. **Define ingress rules**: Create a list of ingress rules that allow traffic from pods with the label `app: curl`. Make sure to account for any additional conditions you want.
8. **Apply the policy**: Run the command `kubectl apply -f allow_curl.yaml` to deploy your policy.
9. **Test the setup**: Use curl commands within the allowed pod to verify proper communication with the color API.

Remember, if the changes don’t apply immediately, you may need to delete and recreate the affected pods to see the results.

## Conclusion

Congratulations on learning how to implement your first network policies in Kubernetes! By allowing traffic from specific pods, you're taking significant steps toward more secure and efficient applications. Keep practicing and exploring the capabilities of Kubernetes, and don’t hesitate to come back if you have questions. You've got this! 🌟
