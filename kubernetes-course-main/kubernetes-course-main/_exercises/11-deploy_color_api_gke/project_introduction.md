# Project Introduction: Deploying Color API on Google Kubernetes Engine

Welcome to this exciting project where we’ll deploy our Color API in a managed Google Kubernetes Engine (GKE) cluster! 🎉 In this exercise, our focus will be on bringing together everything we’ve learned about Kubernetes to deploy a functional application using GKE's robust features.

## Overview

In this exercise, you'll implement two environments of our Color API application: a development environment and a production (or "proud") environment. The goal is to deploy version 2.1.0 of the Color API in development, and the stable version 2.0.0 in production. Here are the main steps we'll cover:

1. Create two namespaces: `dev` and `prod`.
2. Deploy MongoDB stateful sets with headless services in each namespace.
3. Set up config maps and secrets for managing configurations and credentials.
4. Create persistent volume claims for MongoDB storage.
5. Configure services, ingresses, and certificates for API access.
6. Implement network policies to control traffic flow between pods.
7. Use `kustomize` to manage customization in deployments.

Before diving into the step-by-step guide, take a moment to try implementing the solution by following the overview steps. It’s a great way to reinforce your learning!
