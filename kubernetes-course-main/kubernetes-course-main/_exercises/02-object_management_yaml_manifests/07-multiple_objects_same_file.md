# Managing Multiple Kubernetes Objects in a Single File

## Overview

In this exercise, we're going to explore how to define multiple Kubernetes objects in a single YAML file. This can help keep your configurations organized and make it easier to manage complex applications. Before diving into the step-by-step guide, here's a quick list of what you can try to implement on your own:

1. Create a new YAML file for an NGINX pod and service.
2. Use three dashes (`---`) to separate the pod and service definitions within the same file.
3. Apply the changes using the `kubectl apply` command.
4. Experiment with changes to either the pod or service to see how updates can be handled.

I encourage you to give this a shot before referring to the detailed guide below. 💪

## Step-by-Step Guide

1. **Open your IDE**: Start by creating a new YAML file to store both your NGINX pod and service definitions.
2. **Define the NGINX Pod**: Copy and paste the pod definition into your new YAML file.
3. **Separate with Dashes**: After the pod definition, add three dashes (`---`) to indicate the start of a new resource.
4. **Define the NGINX Service**: Paste the service definition below the separator.
5. **Save the File**: Ensure that your YAML file is saved (e.g., `nginx.yml`).
6. **Check for Existing Resources**: Run `kubectl get pods` and `kubectl get svc` in your terminal to confirm there are no existing NGINX pods or services.
7. **Apply the Configuration**: Use the command `kubectl apply -f nginx.yml` to create both the pod and service resources.
8. **Experiment with Updates**: Try making changes to either the pod or service configuration, and apply those changes using the `kubectl apply` command again to see how it affects your resources.

## Conclusion

Congratulations on learning how to manage multiple Kubernetes objects within a single YAML file! This approach provides a neat way to bundle related configurations together, making your life easier as you work with more complex applications. Remember, you can also break things into different files if you prefer more targeted updates later on. Keep practicing and exploring, as the more you work with Kubernetes, the more comfortable you'll become! 🚀
