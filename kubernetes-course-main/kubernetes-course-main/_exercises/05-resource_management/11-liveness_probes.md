# Understanding Liveness Probes in Kubernetes

Welcome! In this guide, we'll dive into the concept of liveness probes in Kubernetes and how to implement them in your applications. This exercise aims to provide you with hands-on experience, so feel free to try it out yourself before referring to the detailed steps below. 🚀

## Overview

To get started with implementing liveness probes, here’s what you should aim to accomplish:

1. Ensure you've defined a startup probe that checks the application’s health.
2. Use version 1.2.1 so the up endpoint is available for checks.
3. Implement your liveness probe to hit the health endpoint instead of the up endpoint.
4. Adjust the probe's failure threshold and timing as necessary.
5. Experiment with creating, monitoring, and deleting pods that use these probes.

We encourage you to give it a go! Try implementing these steps yourself before popping over to the step-by-step guide.

## Step-by-Step Guide

1. **Set up the Startup Probe**:

   - Fix and define your startup probe to check the up endpoint.
   - Ensure you're using Kubernetes version 1.2.1 to access the necessary endpoints.

2. **Create the Pod**:
   - Use the terminal command `kubectl apply` to create your pod.
   - Monitor the pod’s health status.
3. **Implement the Liveness Probe**:

   - Change the probe to check the health endpoint instead of the up endpoint.
   - Set a failure threshold (e.g., 3) and a delay (e.g., 10 seconds) between probes.

4. **Add Environment Variables**:

   - Introduce an environment variable, such as `fail_liveness`, and set it to true to simulate failure behavior.

5. **Create and Monitor Your Liveness Probe**:

   - Once you've made your changes, recreate the pod using `kubectl apply`.
   - Watch its status and see how the liveness probe behaves in real-time.

6. **Observe Container Behavior**:

   - Note how many times the container restarts if the liveness probe fails.
   - Consider the implications for real-world applications.

7. **Clean Up**:
   - Once done, remember to delete your pod to keep your environment tidy.

## Conclusion

In this lecture, we explored how to use liveness probes to ensure your containers are functioning healthily in Kubernetes. We learned that failed liveness probes can trigger container restarts, which helps maintain application stability. Keep practicing these concepts as they are vital for managing Kubernetes applications effectively. Remember, the key takeaway here is that liveness probes help us ensure our applications are running smoothly! 🌟
