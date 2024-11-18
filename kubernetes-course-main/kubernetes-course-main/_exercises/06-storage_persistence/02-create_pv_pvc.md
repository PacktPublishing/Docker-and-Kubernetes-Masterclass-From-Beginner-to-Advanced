# Creating Persistent Volumes and Claims in Kubernetes

## Overview

In this exercise, we will explore the concept of Persistent Volumes (PV) and Persistent Volume Claims (PVC) using local storage in Kubernetes. The primary goal is to understand how to create a persistent volume, define a persistent volume claim, and incorporate them into pods. Before diving into the step-by-step instructions, give it a try yourself! Here’s a quick overview of the main steps you'll need to implement:

1. Begin with a clean Kubernetes namespace.
2. Create a persistent volume configuration file with desired specifications.
3. Apply the configuration and troubleshoot any errors related to paths or volume specifications.
4. Create a persistent volume claim to request a volume that satisfies certain criteria.
5. Check the status of the volume and claim to ensure they are bound correctly.

Take your time and try to implement these steps on your own before looking at the guidelines below! 🛠️

## Step-by-Step Guide

### 1. Prepare Your Environment

- Make sure there are no resources in your default namespace by checking the current pods.

### 2. Create the Persistent Volume (PV)

- Create a new YAML file named `local-volume-example.yaml`.
- Specify the following parameters in the PV definition:
  - **apiVersion**: v1
  - **kind**: PersistentVolume
  - **metadata**: Name your volume (`local-volume`).
  - **spec**: Define:
    - `capacity`: Set to `1Gi`.
    - `accessModes`: Specify `ReadWriteOnce`.
    - `persistentVolumeReclaimPolicy`: Set it to `Retain` or leave blank for the default.
    - `storageClassName`: Set as `local-storage`.
    - Add the `local` attribute with the desired mount path (ensure the path exists on the node).

### 3. Apply the Persistent Volume

- Apply the PV file using the command:
  ```bash
  kubectl apply -f local-volume-example.yaml
  ```
- Check the status of your volume with:
  ```bash
  kubectl get pv
  ```
- If there are errors, verify the mount path and correct them.

### 4. Create the Persistent Volume Claim (PVC)

- In the same directory, create a new YAML file named `local-volume-claim.yaml`.
- Specify:
  - **apiVersion**: v1
  - **kind**: PersistentVolumeClaim
  - **metadata**: Name it (`local-volume-claim`).
  - **spec**:
    - `accessModes`: Specify `ReadWriteOnce`.
    - `resources`: Specify the requests with `requests.storage: 1Gi`.
    - `storageClassName`: Set it as `local-storage`.

### 5. Apply the Persistent Volume Claim

- Apply the PVC file using:
  ```bash
  kubectl apply -f local-volume-claim.yaml
  ```
- Confirm if the PVC is bound by checking:
  ```bash
  kubectl get pvc
  ```

### 6. Verify Binding

- If bound successfully, check the details of the PVC and PV to ensure they are linked. Use:
  ```bash
  kubectl describe pvc local-volume-claim
  ```

## Conclusion

Congratulations! You've successfully created a Persistent Volume and a Persistent Volume Claim. This exercise helped you grasp how to manage storage in Kubernetes by defining volumes that can be persistently accessed by your pods. Remember that the relationship between PV and PVC is crucial, and understanding how they interact will enhance your Kubernetes skills. Keep practicing, and don't hesitate to explore more complex configurations! 🚀
