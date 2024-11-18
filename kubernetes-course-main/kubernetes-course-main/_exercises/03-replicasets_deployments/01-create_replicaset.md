# Creating a Replica Set in Kubernetes

## Overview

In this exercise, we'll dive into the practical side of working with replica sets in Kubernetes. The goal is for you to set up a replica set for managing pods, ensuring that a specified number of pod replicas are running at all times. Here are the main steps to follow:

1. Clean up your Kubernetes cluster and ensure no pods or services are running.
2. Create a new folder for your project and set up an `nginx-rs-replicaset.yaml` definition file.
3. Define the replica set with the API version, kind, metadata, and spec sections, including the necessary specifications for pod templates.
4. Apply the YAML file using `kubectl apply -f`.
5. Verify the creation and status of your replica set and its pods.
6. Experiment by deleting a pod to observe if the replica set automatically ensures the desired number of replicas.

Take a moment to try these steps on your own before checking out the detailed guide below! It can be really beneficial to engage with the material hands-on. 🚀

## Step-by-Step Guide

1. **Clean Up Your Cluster**: Before starting, ensure that your Kubernetes cluster is clean. You can do this by removing any existing pods and services from the default namespace.
2. **Set Up Your Project**: Create a new directory for your exercise, such as `replica_sets`, and navigate into it.

3. **Create the YAML File**:
   - Open your IDE and create a new file named `nginx-rs-replicaset.yaml`.
4. **Define the Replica Set**:

   - Add the following structure to your YAML file:
     ```yaml
     apiVersion: apps/v1
     kind: ReplicaSet
     metadata:
       name: nginx-replica-set
     spec:
       replicas: 3
       selector:
         matchLabels:
           app: nginx
       template:
         metadata:
           labels:
             app: nginx
         spec:
           containers:
             - name: nginx
               image: nginx:1.27.0
               ports:
                 - containerPort: 80
     ```

5. **Apply the File**: Open your terminal and run:

   ```bash
   kubectl apply -f nginx-rs-replicaset.yaml
   ```

6. **Verify Replica Set and Pods**:

   - Run `kubectl get rs` to see the details of your newly created replica set.
   - Check the status of your pods using `kubectl get pods`.

7. **Test the Auto-Recovery**:
   - Delete a pod using:
     ```bash
     kubectl delete pod <pod-name>
     ```
   - Then, re-run `kubectl get pods` to see if a new pod was created automatically by the replica set.

## Conclusion

In this exercise, we explored how to create a replica set in Kubernetes, ensuring that a consistent number of pod replicas are running. We also practiced deploying a simple NGINX application while learning about automatic recovery features of replica sets. Don't hesitate to experiment further and deepen your understanding by practicing more. The more you work with Kubernetes, the more comfortable and proficient you'll become! Keep up the great learning! 🌟
