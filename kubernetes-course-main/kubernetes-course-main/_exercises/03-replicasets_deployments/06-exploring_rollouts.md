# Exploring Rollouts in Kubernetes

Welcome to our session on exploring rollouts in Kubernetes! 🐳 In this guide, we're going to dive into the essential operations you can perform during a rollout, including how to review the history of rollouts, undo changes, and annotate deployments.

## Overview

In this exercise, you’ll learn how to interact with Kubernetes rollouts and understand version control for your deployments. Before diving into the step-by-step guide, here’s a brief outline of what you’ll be implementing:

1. Ensure your deployment (e.g., nginx) is up and running. If it’s been deleted, recreate it.
2. Use the `kubectl rollout` command to check the history of the deployment.
3. Learn how to pause, resume, and undo previous rollouts.
4. View previous deployment configurations and their changes.
5. Add annotations to your deployment to track changes effectively.

Now, challenge yourself to implement these steps before peeking at the detailed instructions!

## Step-by-Step Guide

1. **Verify Your Deployment**: Start by ensuring your deployment is running. Use the command:

   ```bash
   kubectl get deploy
   ```

2. **Check Rollout History**: Use the rollout command to view the history of your deployment:

   ```bash
   kubectl rollout history deployment/nginx-deployment
   ```

3. **Undo a Rollout**: If you want to revert to an earlier version, run:

   ```bash
   kubectl rollout undo deployment/nginx-deployment
   ```

4. **View Revision Details**: To see details of a specific revision:

   ```bash
   kubectl rollout history deployment/nginx-deployment --revision=2
   ```

5. **Add Annotations**: Modify your deployment YAML file to include an annotation with the change cause, and then apply it:

   ```yaml
   annotations:
     kubernetes.io/change-cause: 'Update nginx to tag 1.27.0-alpine'
   ```

   Then apply the changes:

   ```bash
   kubectl apply -f your-deployment-file.yaml
   ```

6. **Annotate Post-Rollout**: If you're using an CI/CD pipeline, you can also annotate your deployment imperatively:

   ```bash
   kubectl annotate deployment/nginx-deployment kubernetes.io/change-cause="Update nginx to tag 1.27.1-alpine"
   ```

7. **Check Annotations**: Verify that the annotation was successfully added:
   ```bash
   kubectl describe deployment/nginx-deployment
   ```

## Conclusion

In this lecture, we explored how to manage rollouts in Kubernetes, including checking history, reversing changes, and documenting changes with annotations. Rollouts are crucial for maintaining the stability and reliability of your applications when deploying updates. Keep experimenting with these commands to deepen your understanding. Remember, practice is key in getting comfortable with Kubernetes! Keep up the great work, and let's continue learning together! 🚀
