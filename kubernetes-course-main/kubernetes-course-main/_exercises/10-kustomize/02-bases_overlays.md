# Understanding Base and Overlays in Kubernetes Customizations

## Overview

In this exercise, we’ll dig deeper into the concepts of bases and overlays in Kubernetes customizations. The goal is to help you structure your applications effectively and manage different environments without duplicating resources. Before diving into the guide, it would be great if you could give the implementation a shot on your own! Here are the main steps to try:

1. Create a folder structure for your application with a base and overlays.
2. Move the relevant files into the base folder.
3. Create two overlays: one for the development environment and another for production.
4. Set up a customization.yaml file in each overlay, pointing to the base directory.
5. Apply the configurations for both environments to verify they work as expected.

Take a moment to work through these steps and see how far you can get before checking the detailed guide below! 🚀

## Step-by-Step Guide

1. **Folder Structure**: Set up a folder for your application named `nginx-app`. Inside this folder, create two subfolders: `base` and `overlays`.
2. **Move Files**: Move your Kubernetes resource files (e.g., deployment, service configurations) into the `base` folder.

3. **Kustomize Base**: Modify the base configuration to remove any namespaces so that these resources are not tied to a specific context.

4. **Create Overlays**:

   - Inside the `overlays` folder, create two additional folders: `dev` and `prod`.
   - In each of these folders, create a `customization.yaml` file.

5. **Link Resources**:

   - In the `dev/customization.yaml`, include a reference to the `base` directory, allowing it to reuse those resources without duplication.
   - Do the same for `prod/customization.yaml`, but also specify the appropriate namespace for each environment.

6. **Namespace Setup**: Set the namespace in the `customization.yaml` under the overlays:

   - For `dev`, set the namespace to `dev`.
   - For `prod`, set it to `prod`.

7. **Apply Configurations**: Use the command line to apply the configurations for both development and production environments:

   - Run `kubectl apply -k overlays/dev` for the development environment.
   - Run `kubectl apply -k overlays/prod` for the production environment.

8. **Verification**: Check if the pods are running in their respective namespaces using:
   - `kubectl get pods -n dev`
   - `kubectl get pods -n prod`

This approach allows you to keep a single source of truth for your configuration files while enabling customizations as needed.

## Conclusion

In this lecture, we explored how bases and overlays work within Kubernetes customizations, focusing on structuring your applications to avoid duplication while managing different environments efficiently. Remember, this pattern is incredibly powerful and will help you significantly as you continue your Kubernetes journey. Keep practicing, and don’t hesitate to dive deeper into more sophisticated customization techniques!
