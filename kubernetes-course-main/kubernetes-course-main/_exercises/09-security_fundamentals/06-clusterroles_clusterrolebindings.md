# Understanding Cluster Roles and Cluster Role Bindings

## Overview

In this part of our Kubernetes journey, we're diving into how to effectively use cluster roles and cluster role bindings. The goal is to grant broader permissions to manage pods, especially for users like Alice and her admin group. Here’s a quick peek at what you’ll be trying to implement:

1. Create a cluster role that allows pod management (creation, deletion, updating) for administrators.
2. Set up a cluster role binding to associate this role with the admin group.
3. Test the permissions by switching between different user contexts to verify that they have the expected access.

Before checking the detailed steps below, take a moment to try implementing this solution on your own. You might discover some insights as you process the implementation! 🌟

## Step-by-Step Guide

1. **Create a New Directory**: Under the top directory, create a folder named `cluster_roles`.
2. **Copy and Rename Files**: Copy the relevant role files into this new folder and rename them to `pod_admin.yaml` and `pod_admin_role_binding.yaml`.
3. **Adjust the Cluster Role**:
   - Change the kind from `Role` to `ClusterRole`.
   - Remove any namespace specification since it’s not applicable for cluster roles.
   - Update resource permissions to include pods and their logs.
   - Allow all verbs by using the wildcard character `*`.
4. **Define the Cluster Role Binding**:
   - Change the kind from `RoleBinding` to `ClusterRoleBinding`.
   - Specify the `pod_admin` cluster role and include the admin group in the subjects section.
5. **Apply the Configuration**:
   - Open your terminal and switch to the context of your Kubernetes cluster.
   - Apply the cluster role and cluster role binding files using `kubectl apply -f`.
6. **Verify Permissions**:
   - Test with the user contexts for Bob and Alice to confirm that only Alice (and users of the admin group) can manage pods, while Bob cannot.

## Conclusion

In this session, we explored how to utilize cluster roles and role bindings to effectively manage pod permissions in Kubernetes. We learned how to create broader permissions for admin groups, ensuring they can perform various operations on pods across namespaces. Keep practicing this concept to deepen your understanding, and don't hesitate to experiment with different configurations. You’re doing great! 🚀
