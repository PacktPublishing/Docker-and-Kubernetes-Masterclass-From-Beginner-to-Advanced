# Exploring Kubernetes API Resources

Welcome! In this session, we’re diving into the fascinating world of Kubernetes API resources. You’ll get the chance to explore the documentation and understand how to interact with various resources in Kubernetes. 🌟 Let’s get started!

## Overview

Before we jump into the step-by-step guide, take a moment to think about how you’d implement the following steps on your own. The goal is to familiarize yourself with Kubernetes API resources and learn how to interact with them effectively. Here’s a quick summary:

1. **Access the Kubernetes API documentation** and explore the various resource types.
2. **Examine workload resources**, focusing on deployments and replica sets.
3. **Use the `kubectl` command to list available resources** in your cluster.
4. **Filter resources based on their API group** and check the actions allowed for each resource.

Now, let's see if you can implement this before checking the detailed guide below! Give it a try! 🙌

## Step-by-Step Guide

1. **Open the Kubernetes API documentation**: Start by navigating to the official Kubernetes API reference documentation online.

2. **Explore the resource types**: On the left side of the documentation, you’ll find multiple resource types. Click on "Workloads" to explore `Pods`, `Replica Sets`, and `Deployments`.

3. **Review the Deployment structure**: Within the deployment section, scroll down to the `spec` part to understand which fields are required and their default values.

4. **Using `kubectl` to explore resources**:

   - To list all resources, run the command:
     ```bash
     kubectl api-resources
     ```

5. **Filter by API group**:

   - For instance, if you want to see resources under the "storage" API group, use:
     ```bash
     kubectl api-resources --api-group=storage.k8s.io
     ```

6. **Check allowed actions**: When listing resources, you can also check the verbs (actions) allowed for each resource type to understand what operations you can perform.

7. **Inspect resource details**: Explore the different API versions available and familiarize yourself with both stable and alpha/beta resources.

## Conclusion

Great job! By following this guide, you should be well on your way to understanding how to explore and interact with Kubernetes API resources. Remember, the key takeaway is to familiarize yourself with the API documentation, as it is an essential tool for working with Kubernetes. Keep practicing, and don’t hesitate to explore more resources to deepen your understanding! Happy learning! 🚀
