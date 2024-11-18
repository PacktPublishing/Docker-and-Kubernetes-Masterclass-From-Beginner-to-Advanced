# Mounting Config Maps as Volumes in Kubernetes

## Overview

In this exercise, we will explore how to mount Config Maps as volumes in Kubernetes and understand the implications of doing so for our containers. This practical implementation will include creating a Config Map, setting it up with key-value pairs, and ensuring that our application can access this data effectively.

Before diving into the step-by-step guide, I encourage you to give this a try on your own! Here’s a brief summary of the steps you'll need to follow:

1. Create a Config Map with at least two key-value pairs.
2. Copy an existing Pod configuration and modify it to use your new Config Map.
3. Set up an environment variable sourced from the Config Map.
4. Define the volume configuration to mount the Config Map.
5. Check inside the Pod to see the mounted files and validate the content.

Take some time to implement this on your own! 💪 Once you're ready, you can refer to the detailed step-by-step guide below.

## Step-by-Step Guide

1. **Create Your Config Map:**

   - Create a file named `green-config.yaml`.
   - Define the Config Map with `apiVersion: v1` and `kind: ConfigMap`.
   - Add key-value pairs, like `color.txt` containing "green" and `hello from green.js` containing a simple console log script.

2. **Modify the Pod Configuration:**

   - Copy your existing Pod YAML definition.
   - Update the name and labels to reflect the new configuration.
   - Instead of loading all data as environment variables, only load one relevant variable from the Config Map.

3. **Set Up Environment Variables:**

   - In the Pod definition, create an environment variable `color_config_path`.
   - Use `configMapKeyRef` to specify the key from your new Config Map.

4. **Define the Volume Configuration:**

   - In the Pod YAML, under volumes, specify a volume of type `ConfigMap` and provide the name of the Config Map.
   - Under the volume mounts section, define where to mount it in the container, ensuring the path is `/mount/config`.

5. **Launch and Verify:**
   - Apply the Config Map and Pod configurations to your Kubernetes cluster.
   - Use `kubectl exec` to access the Pod and verify that the mounted files reflect the Config Map content.
   - Test by running your script and accessing the environment variable to ensure everything works as expected.

## Conclusion

In this session, we learned how to effectively mount Config Maps as volumes within our containers, allowing us to separate our configuration data and make it accessible to applications. We’ve also discussed best practices for managing configuration data in Kubernetes, which can simplify our workflows and improve maintainability.

Keep practicing these concepts, as they are fundamental to working with Kubernetes! The more you explore, the more confident you'll become. Happy learning! 🚀
