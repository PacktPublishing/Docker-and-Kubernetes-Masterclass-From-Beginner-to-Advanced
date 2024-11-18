# Strategic Merge Patches in Kubernetes

Welcome! In this tutorial, we’ll dive into the fascinating world of strategic merge patches in Kubernetes. The goal is to help you learn how to create scalable and maintainable patches by using separate YAML files instead of inline patches in the customization file.

## Overview

Before we jump into the step-by-step guide, here's a quick overview of what you should aim to implement. The main focus will be on moving from inline patches in your `customization.yaml` file to separate YAML files for better organization and scalability. If you think you can tackle this on your own, give it a try first! Here are the steps you should aim to follow:

1. Create a separate YAML file for your patch (e.g., `update-resources.patch.yaml`).
2. Rename the file appropriately to indicate that it is a patch.
3. Modify your `customization.yaml` file to reference the new patch file.
4. Implement additional patches as needed, following the same structure.
5. Test your configuration to ensure everything works as expected.

Now that you have a sense of the overall flow, why not take a shot at implementing it before we walk through it together?

## Step-by-Step Guide

Let’s break it down step by step:

1. **Create Patch File**: Start by creating a new YAML file called `update-resources.patch.yaml` and copy your inline patch content into it.
2. **Fix Naming**: Rename the file to clearly indicate it's a patch file (e.g., `update-resources.patch.yaml`).

3. **Update `customization.yaml`**: Open your `customization.yaml` file, and instead of using an inline patch, reference your newly created file:

   ```yaml
   patches:
     - path: update-resources.patch.yaml
   ```

4. **Add More Patches**: Keep adding more patches as you see fit (for example, `use-latest-tag.patch.yaml`). Ensure each patch is clearly defined.

5. **Test Deployment**: Return to your terminal, clear the screen, and run your customization command to apply the changes. Check for any issues.

6. **Ordering Conflicts**: Understand that patch order matters; if conflicting patches are applied, the last one will take precedence.

7. **Confirm Working Configuration**: Ensure that everything behaves as expected by running your deployment again.

Congrats! 🎉 You've handled the patches in a much more organized manner.

## Conclusion

In this lecture, we discovered how to make Kubernetes patches more manageable and maintainable by moving from inline patches to separate YAML files. This approach not only enhances clarity but also makes it easier to handle complex configurations. Remember, always consider the order of your patches since that affects the final outcome.

Keep experimenting with these techniques, and don’t hesitate to explore further. Happy patching! 🚀
