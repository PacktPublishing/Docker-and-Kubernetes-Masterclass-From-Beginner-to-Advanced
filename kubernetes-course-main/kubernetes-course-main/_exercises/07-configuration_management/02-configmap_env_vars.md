# Implementing Environment Variables with Config Maps in Kubernetes

## Overview

In this exercise, we're diving into how to use Config Maps to pass data as environment variables to your Kubernetes containers. The goal is to create a Config Map with some configuration data and then use that data as environment variables in a container. Before you look at the step-by-step guide, here’s a quick summary of what you will be doing:

1. Create a `redconfig.yaml` file with color configuration in a Config Map.
2. Apply the Config Map using `kubectl`.
3. Create a `red-color-api.yaml` file for your pod configuration.
4. Use the Config Map values as environment variables in your pod manifests.
5. Deploy the pod and verify that the color is being served correctly.

Take a moment to try these steps on your own before checking the detailed guide below! 🌟

## Step-by-Step Guide

1. **Create the Config Map:**

   - Create a file named `redconfig.yaml` and define a Config Map with a color key set to "red".
   - Ensure that your Config Map is using the `apiVersion` of `v1` and `kind` of `ConfigMap`.

2. **Apply the Config Map:**

   - Use the command `kubectl apply -f redconfig.yaml` to create the Config Map in Kubernetes.

3. **Set Up the Pod Configuration:**

   - Create a new file called `red-color-api.yaml`.
   - Define the pod specifications, including name, labels, and container image.
   - Specify the container port (usually 80).

4. **Configure Environment Variables:**

   - Choose one of two methods to pass environment variables:
     - Method 1: Use the `envFrom` option to load all values from the Config Map, but be cautious about naming conventions.
     - Method 2: Map necessary environment variables individually for better decoupling.

5. **Deploy the Pod:**

   - Apply the pod configuration using `kubectl apply -f red-color-api.yaml`.
   - Check the status of your pod using `kubectl get pods` and see if it’s running.

6. **Expose the Pod:**

   - Use the command `kubectl expose pod red-color-api --type=NodePort --port=80`.
   - Access the service using the URL provided by Minikube.

7. **Verify:**
   - Open your web browser to check if the service is correctly returning "red" as expected.

## Conclusion

In summary, using Config Maps to manage environment variables allows you to easily change configurations without altering your application code. You’ve learned two approaches for binding environment variables from a Config Map and how to expose your pod services. Remember to keep practicing what you’ve learned here! The more you engage with these concepts, the more comfortable you will become with Kubernetes. Happy coding! 🚀
