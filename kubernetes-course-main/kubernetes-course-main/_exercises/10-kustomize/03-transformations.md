# Understanding Transformations in Kubernetes Customization

## Overview

In this lecture, we're diving into the transformations you can implement using Kubernetes customization, particularly focusing on how to adjust resource names, labels, and images within overlays. The goal is to give your applications meaningful identifiers and keep your deployments organized. Here’s a quick summary of steps you should consider trying on your own before peeking at the step-by-step guide:

1. Set name prefixes and suffixes for your resources.
2. Apply common labels to all resources to identify them easily.
3. Add common annotations for additional context.
4. Change the image version for your application.
5. Adjust the replica count based on your environment needs.

Give it your best shot to implement these changes before checking out the detailed steps! 🌟

## Step-by-Step Guide

Follow these steps to implement the transformations using Kubernetes customization:

1. **Set Name Prefixes and Suffixes**: Update the names of your resources by adding prefixes and suffixes. For example, prefix with `dev-` and suffix with `-alpha`.
2. **Apply Common Labels**: Create a set of labels, such as:

   - Team: finance
   - Project: e-commerce app
   - Tier: backend
   - Environment: dev

   Make sure to delete the old resources if necessary before applying the new labels.

3. **Add Common Annotations**: Include useful annotations for your resources, like maintainer contact (e.g., `finance@company.org`) and repository links.

4. **Change the Image Version**: Modify the image version in your customization file to reflect the appropriate version for your development environment (e.g., `1.27.1`).

5. **Adjust Replica Count**: Set a lower replica count for your resources if you aim to conserve resources. For example, set the nginx deployment to have four replicas in your production overlay.

6. **Inspect Your Changes**: Use the command `kubectl apply -k ./nginx/app/overlays/dev` to apply your changes and verify they have taken effect.

## Conclusion

In this session, we explored the powerful transformations you can achieve with Kubernetes customization. By modifying resource names, applying common labels and annotations, updating image versions, and adjusting replica counts, you can efficiently manage your Kubernetes environments. Keep pushing forward with your learning journey, and don’t hesitate to practice these transformations to solidify your understanding! 🚀
