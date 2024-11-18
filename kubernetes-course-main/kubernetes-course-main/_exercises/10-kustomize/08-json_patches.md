# Removing Resources in Kubernetes with JSON Patches

## Overview

In this exercise, you’ll learn how to effectively use JSON patches to remove specific elements from your Kubernetes configurations. While strategic merge patches are useful, they can’t always achieve removal operations easily. We’ll focus on creating a JSON patch to remove the `resources` field from a specified container in a deployment. Before diving into the step-by-step guide, I encourage you to try implementing this solution on your own.

Here are the main steps to follow:

1. Create a JSON patch file in YAML format.
2. Specify the target resource, including its API group, version, kind, and name.
3. Define the operation to remove a specific path in the target resource.
4. Apply the patch and verify that the specified resource has been removed.

Give it a go! If you feel stuck, you can always refer back to the detailed guide below. 😊

## Step-by-Step Guide

1. **Create the JSON Patch File**: Start by creating a file called `remove-resources.patch.yaml`. In this file, you will define the operations you want to perform on your target resource.

2. **Define the Target Resource**: Specify the target resource in your patch file. For example, you may want to target an `nginx` deployment. Your YAML might look something like:

   ```yaml
   target:
     group: apps
     version: v1
     kind: Deployment
     name: nginx
   ```

3. **Specify the Operation**: Within the patch file, define the operation to remove the `resources` field. Make sure to specify the path in a forward-slash format:

   ```yaml
   operation: remove
   path: /spec/template/spec/containers/0/resources
   ```

4. **Apply the Patch**: Use your terminal to apply the patch to your deployment configuration. You might use a command like:

   ```bash
   kubectl patch deployment nginx --patch "$(cat remove-resources.patch.yaml)"
   ```

   Make sure to modify the command according to your setup.

5. **Verify the Operation**: After applying the patch, check your deployment configuration to ensure that the `resources` section has been removed successfully.

6. **Test with Other Resources**: Consider applying similar patches to other deployments or using label selectors for a broader application. Review if the resources maintain compatibility with the modifications.

## Conclusion

Congratulations on learning how to use JSON patches to remove resources from your Kubernetes configurations! Using patches provides you with fine-grained control over your resources and enhances your ability to manage configurations dynamically. As you continue to practice, you'll gain more confidence in customizing Kubernetes resources effectively. Keep experimenting and learning!
