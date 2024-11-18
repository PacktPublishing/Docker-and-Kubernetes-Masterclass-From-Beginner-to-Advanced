# Understanding Data Persistence with Docker Volumes

## Overview

In today’s exercise, we’re going to explore data persistence in Docker using volumes. This is an important concept because it allows your data to exist beyond the life cycle of a container. Before diving into the step-by-step guide, give yourself a chance to implement the solution on your own. Here’s a quick summary of what we’ll cover:

1. Run a simple NGINX container in detached mode with a specific name.
2. Connect to the running container and create a file in a temporary directory.
3. Stop and restart the container to check if the file persists.
4. Understand the limitations of container storage without using volumes.
5. Introduce Docker volumes for better data management.

Go ahead and try to implement these steps before checking the guide below! 🚀

## Step-by-Step Guide

1. **Run the NGINX Container**:
   - Execute the command to run an NGINX container in detached mode:
     ```bash
     docker run -d --name web-server nginx:1.27.0
     ```
2. **Access the Container**:
   - Use the Docker exec command to enter the running container:
     ```bash
     docker exec -it web-server /bin/sh
     ```
3. **Create a File**:
   - Navigate to the `/tmp` directory and create a file:
     ```bash
     cd /tmp
     echo "Hello World" > hello.txt
     ```
4. **Exit and Stop the Container**:
   - Exit from the container shell and then stop the container:
     ```bash
     exit
     docker stop web-server
     ```
5. **Start the Container Again**:
   - Restart the container and check if your file is still there:
     ```bash
     docker start web-server
     docker exec -it web-server /bin/sh
     cat /tmp/hello.txt
     ```
6. **Remove the Container and Check Again**:
   - Remove the container and run a new one to see if the data persists without using volumes:
     ```bash
     docker rm web-server
     docker run -d --name web-server nginx:1.27.0
     docker exec -it web-server /bin/sh
     ls /tmp
     ```

## Conclusion

In this session, we’ve learned about the basic concept of data persistence in Docker, especially focusing on the limitations of container storage. By trying out the steps for creating, stopping, and restarting containers, you should have a clearer understanding of when and why to use Docker volumes for persistent data storage. Keep experimenting, and remember that mastering these concepts takes practice! 🌟
