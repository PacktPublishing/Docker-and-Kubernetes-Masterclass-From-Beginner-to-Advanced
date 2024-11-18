# Networking in Docker: Understanding the Default Bridge Network

## Overview

Welcome back! In this session, we're diving into an essential aspect of Docker: networking. Our focus will be on the default bridge network, how it works, and some of its limitations. Before we jump into the detailed steps, let’s take a moment to think through what you can try to implement on your own.

Here’s a summary of the main steps:

1. Run a container using the default bridge network.
2. Inspect the bridge network to check the connected container details.
3. Attempt to access the container using its name and then by its IP address.
4. Understand and note the limitations of using the default bridge network.

Give these steps a try before comparing your results with the guidelines below! 🐳

## Step-by-Step Guide

1. **Run a Container**: Start by running a container (like Nginx) in detached mode and giving it a name, such as `web_server`.

   ```bash
   docker run -d --name web_server nginx:1.27.0
   ```

2. **Inspect the Bridge Network**: Execute the command to inspect the bridge network.

   ```bash
   docker network inspect bridge
   ```

3. **Get Container IP**: Look for the container's IP address in the inspection output.

4. **Run another Container**: Start a new container (like Ubuntu) and verify it runs.

   ```bash
   docker run -it ubuntu:24.04 /bin/bash
   ```

5. **Install curl**: Within the Ubuntu container, update the package list and install curl.

   ```bash
   apt update && apt install curl -y
   ```

6. **Test Connectivity**: Try to reach the Nginx container first by its IP address using curl.

   ```bash
   curl <IP_ADDRESS_OF_NGINX>
   ```

7. **Verify Name Resolution**: Now, try to access the Nginx container using its name:

   ```bash
   curl web_server
   ```

   You'll notice that this won't work due to DNS resolution limitations in the default bridge network.

8. **Cleanup**: Exit the Ubuntu container and remove both it and the Nginx container to clean up your environment.
   ```bash
   docker rm -f <CONTAINER_ID>
   ```

## Conclusion

In this session, we explored Docker's default bridge network. We learned how to connect containers and the importance of IP addresses, as relying on them can lead to difficulties if the containers are recreated. It’s crucial to understand these networking concepts as they form the foundation for more advanced Docker networking practices. Keep practicing and continue to deepen your understanding! 🚀
