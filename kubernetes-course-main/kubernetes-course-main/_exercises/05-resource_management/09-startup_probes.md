# Health Probes in Kubernetes

Welcome! In this session, we’ll be diving deep into the fascinating world of health probes in Kubernetes, specifically focusing on startup probes. This is a crucial concept that helps ensure our applications are reliable and resilient. Let's get started! 🚀

## Overview

Before jumping into the step-by-step guide, it's a great idea to try implementing the solution on your own. Here’s a brief summary of what you should attempt:

1. Set up a new Kubernetes pod for a color API using the correct image version (1.2.0).
2. Define a startup probe to monitor the health of your pod.
3. Set parameters like failure threshold and probe periods.
4. Experiment with environment variables to delay the startup and observe how the startup probe reacts.
5. Verify the pod's status and examine the behavior when the startup probe fails.

Give it a try! Once you've made your attempts, follow the step-by-step guide below to solidify your understanding.

## Step-by-Step Guide

1. **Create New Directory**: Start by creating a new directory for your health probes.
2. **Create Pod Configuration**:
   - Name your file `color_api_pod.yaml`
   - Define the API version, kind, and container specifications including the image `lmacademy/color-api:v1.2.0`.
3. **Define Startup Probe**:
   - In your pod definition, create a `startupProbe`.
   - Set it to perform an HTTP GET request to the `/health` endpoint at port 80.
4. **Configure Resource Limits** (optional but recommended):
   - Add resource limits for CPU and memory.
5. **Set Probe Parameters**:
   - Define failure threshold (e.g., 2).
   - Set the period between probe checks (e.g., 3 seconds).
6. **Apply Your Pod**: Save your configuration and apply it using `kubectl apply -f color_api_pod.yaml`.
7. **Monitor Pod Status**: Use `kubectl get pod -w` to watch the pod’s status as it changes.
8. **Experiment with Startup Delay**:
   - Change the value of `delay_startup` to `true` to test how the startup probe reacts.
   - Monitor for failure messages and container restarts.
9. **Revert the Changes**: Set `delay_startup` back to `false` and observe the pod returning to a healthy state.

## Conclusion

To summarize, we explored the concept of startup probes in Kubernetes, learned how to configure them properly, and observed their effect on pod behavior. Understanding health probes is essential for building robust applications that can self-correct, so keep experimenting and practicing! Don't hesitate to continue learning and testing—the more you practice, the better you’ll get!
