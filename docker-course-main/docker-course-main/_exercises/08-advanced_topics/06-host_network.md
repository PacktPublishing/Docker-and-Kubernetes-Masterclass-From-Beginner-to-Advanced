# Docker Fundamentals: Using Host Network and Port Binding

## Overview

In this exercise, we’ll explore how to use Docker's host network, specifically focusing on container management and port bindings. The goal here is to understand how to effectively run containers using the host network and manage port conflicts. Before diving into the step-by-step guide, consider giving the following tasks a try on your own:

1. Run an NGNX container using the Docker host network.
2. Inspect the container to check its network settings.
3. Attempt to run a second NGNX container on the same port and analyze the results.
4. Create a user-defined Docker network and run an NGNX container with port mapping.
5. Test the port mapping to ensure that traffic is correctly routed to the container.

Take a moment to implement these steps before looking at the detailed guide. It’s a great way to learn! 🚀

## Step-by-Step Guide

Let's break down the process step by step:

1. **Running an NGNX Container:**

   - Use the command:
     ```bash
     docker run --network host nginx:1.27.0
     ```
   - This command runs an NGNX container connected to the host network.

2. **Inspecting the Container:**

   - To inspect the container, use:
     ```bash
     docker inspect <container_id>
     ```
   - Check the network settings to verify it is connected to the host network.

3. **Running a Second NGNX Container:**

   - Try to run another NGNX container on the same host network:
     ```bash
     docker run --network host nginx:1.27.0
     ```
   - Use the command `docker ps -a` to view any errors regarding the second container.

4. **Creating a User-Defined Network:**

   - Create a new network:
     ```bash
     docker network create app-net
     ```
   - Run the NGNX container with port mapping:
     ```bash
     docker run --network app-net -p 80:80 nginx:1.27.0
     ```

5. **Testing Port Mapping:**

   - Use curl to test if the container responds:
     ```bash
     curl http://localhost
     ```

6. **Cleaning Up:**
   - Remove your containers:
     ```bash
     docker rm $(docker ps -a -q)
     ```
   - For cleaning up the network:
     ```bash
     docker network rm app-net
     ```

## Conclusion

In this lecture, we dove into the concept of Docker's host network, the implications of running containers with this network, and the importance of managing port bindings to avoid conflicts. We also explored how user-defined networks offer a more isolated and secure environment for your containers. Keep practicing these concepts to deepen your understanding and skillset. Happy Dockering! 🐳
