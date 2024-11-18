# Introduction to Patches in Kubernetes Customization

Welcome to this guide on using patches in the context of Kubernetes customization! In this session, we’ll explore how to gain more granular control over the changes you make to specific resources in your Kubernetes base. 🛠️ Before diving into the step-by-step implementation, let’s take a creative approach to trying it out on your own first.

## Overview

In this exercise, you'll modify a Kubernetes deployment and manage various configurations effectively using patches. Here’s a high-level overview of what to try implementing:

1. **Define a base configuration for your deployments.**
2. **Add a reverse proxy deployment using the same image.**
3. **Attempt to change the image tag for the NGINX deployment only.**
4. **Utilize the patches field to update specific properties in the NGINX deployment.**
5. **Test and validate the changes by inspecting the output of your deployments.**

Take a moment to see if you can implement this on your own before looking at the step-by-step guide below!

## Step-by-Step Guide

Here’s a clear path to follow for achieving the objectives discussed:

1. **Set Up Your Base Configuration:**

   - Create a base configuration for your NGINX and reverse proxy deployments.
   - Ensure both deployments are leveraging the NGINX image.

2. **Add the Reverse Proxy Deployment:**

   - Include the reverse proxy deployment in your configuration files.

3. **Use the Patches Field:**

   - Instead of using general top-level fields, navigate to the patches option in your configuration.
   - Create an inline patch specifically for the NGINX deployment.

4. **Specify Changes:**

   - In the patch, modify only the parts you want to change (e.g., the image tag).
   - Ensure you retain the relevant metadata and other specifications as is.

5. **Run and Validate:**
   - Clear the terminal and re-run your configuration using Kustomize.
   - Check the deployment output to confirm that only the NGINX deployment image tag has changed.

## Conclusion

Patching is a powerful tool in K8s customization, allowing you to make targeted modifications to your deployments with precision. By leveraging the patches field, you can manage specifics while leaving other configurations intact. Keep experimenting with the patches functionality, as there’s much more to discover as you continue your learning journey! 🌱
