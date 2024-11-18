# Understanding the Shortcomings of Imperative Configuration Files in Kubernetes

Welcome! In this session, we're diving into the limitations of using imperative configuration files in Kubernetes and how they can lead us toward the declarative approach. 🌟 It's important to recognize these limitations, as it will help you improve your Kubernetes management skills.

## Overview

Before we jump into the details, let's summarize what we'll be implementing in this exercise. The goal is to understand the differences between the configuration you've written and what Kubernetes actually uses, particularly when modifying the image of a pod. Here's what you should try to do:

1. Review the existing configuration of the nginx pod.
2. Attempt to change the image of the nginx pod in its configuration file.
3. Run the `kubectl replace` command with the updated configuration.
4. Observe the error messages and understand what they indicate.
5. Learn how to properly apply changes by deleting and recreating the pod.

Give these steps a shot before looking at the detailed guide. It's a great way to learn through hands-on practice!

## Step-by-Step Guide

1. **Review the Current Configuration**: Use the command `kubectl describe pod nginx.bot` to see the current configuration of your nginx pod.
2. **Modify the Configuration File**: Open the nginx configuration file and change the image from `1.27.0` to an Alpine version.
3. **Attempt to Update**: In your terminal, run the command:
   ```
   kubectl replace -f nginx.pod.yaml
   ```
4. **Analyze the Error**: If you see an error regarding changing fields other than the image, take note of what it's saying about missing fields.
5. **Delete and Recreate the Pod**: If you get an error, delete the nginx pod using:
   ```
   kubectl delete pod nginx.bot
   ```
   After that, recreate it with:
   ```
   kubectl create -f nginx.pod.yaml
   ```
6. **Verify the Change**: Run `kubectl describe pod nginx.bot` again to confirm that the image change has been successfully applied.

## Conclusion

Through this exercise, we explored the challenges that come with imperative configuration management in Kubernetes. Understanding the difference between what's defined in your files and what Kubernetes manages behind the scenes is crucial. By switching to a declarative approach, Kubernetes can efficiently manage status updates and maintain object integrity without needing constant deletions and recreations. Keep practicing these concepts, and soon, you'll feel much more comfortable with Kubernetes!
