# Docker CLI: Working with Containers and Images

Welcome to the next part of our Docker journey! In this session, we will dive deeper into some practical commands you'll use frequently when working with Docker containers and images.

## Overview

In this exercise, the main objective is to understand how to interact with Docker containers, run commands inside them, and build simple images. By the end, you should be able to:

1. Run an NGINX container in detached mode.
2. View the logs of the running container.
3. Execute commands inside the container to interact with it.
4. Create a simple Dockerfile and build a custom image.

Before peeking at the step-by-step guide, I encourage you to give this a try on your own! 🚀

## Step-by-Step Guide

Here’s how to accomplish the tasks:

1. **Run an NGINX Container**: Use the `docker run` command with the appropriate flags to start the NGINX container in detached mode, mapping the ports correctly.

   ```bash
   docker run -d -p 80:80 --name web_server nginx
   ```

2. **Check Running Containers**: Verify that your container is running with:

   ```bash
   docker ps
   ```

3. **View Logs**: To check the logs of your running NGINX container, use:

   ```bash
   docker logs web_server
   ```

4. **Follow Logs Live**: To follow the logs as they occur, add the `-f` flag:

   ```bash
   docker logs -f web_server
   ```

5. **Execute Shell Inside Container**: If you need to run commands inside the NGINX container, use:

   ```bash
   docker exec -it web_server sh
   ```

6. **Create a Dockerfile**: Create a new file named `Dockerfile` and add the following:

   ```dockerfile
   FROM ubuntu:latest
   CMD ["echo", "Hello from my first Docker image!"]
   ```

7. **Build the Custom Image**: Run the build command in the directory where your Dockerfile is located:

   ```bash
   docker build -t my_first_image .
   ```

8. **Run Your Custom Image**: Finally, execute your newly built image:
   ```bash
   docker run my_first_image
   ```

## Conclusion

You’ve learned some essential Docker commands today, such as running containers, viewing logs, and building custom images. This foundational knowledge is critical for diving deeper into Docker's powerful capabilities. Remember, the goal isn't to memorize everything but rather to understand the basics so you can practice and apply them as we progress through the course. Keep experimenting and don’t hesitate to ask questions when something isn’t clear! Happy learning! 🎉
