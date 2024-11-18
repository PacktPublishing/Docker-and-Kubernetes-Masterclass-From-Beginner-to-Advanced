# Understanding Images and Containers in Docker

Welcome to the guide on understanding the key differences between Docker images and containers! 🐳 This session is going to help clarify a topic that often confuses many newcomers to Docker. Before diving into the detailed steps, let's give you a chance to explore the solution on your own.

## Overview

In this exercise, you will learn how to differentiate between Docker images and containers by creating and managing them effectively. The goal is to create a simple web server using Docker, and understand how modifying an image affects the containers created from it.

Here’s a brief summary of the main steps you should try to implement the solution:

1. **Clean Your Docker Environment:** Stop and remove any existing containers.
2. **Modify the HTML File:** Customize an `index.html` file for your web server.
3. **Build a New Docker Image:** Use the Docker CLI to build your image with appropriate tagging.
4. **Run Your Docker Containers:** Start containers from the new image and verify they serve the updated content.
5. **Manage Versioning:** Understand how changing the image affects existing containers and learn to create new versions.

Go ahead and give it a try! Implement the solution before checking the detailed steps below.

## Step-by-Step Guide

1. **Clean Your Docker Environment:**

   - Stop all running containers:
     ```bash
     docker stop $(docker ps -q)
     ```
   - Remove all containers:
     ```bash
     docker rm $(docker ps -aq)
     ```
   - Confirm that you have a clean slate with:
     ```bash
     docker images
     docker ps -a
     ```

2. **Modify the HTML File:**

   - Open your `index.html`, and change the welcome message to something unique (e.g., "Welcome to the blue NGINX").

3. **Build a New Docker Image:**

   - Run the build command in the terminal:
     ```bash
     docker build -t web_server_image:blue .
     ```

4. **Run Your Docker Containers:**

   - Start a new container:
     ```bash
     docker run -d -p 3000:80 --name blue web_server_image:blue
     ```
   - Verify that it works using curl:
     ```bash
     curl http://localhost:3000
     ```

5. **Manage Versioning:**
   - Change your `index.html` again (e.g., "Welcome to the updated blue NGINX") and rebuild the image:
     ```bash
     docker build -t web_server_image:blue .
     ```
   - Start a new container for the updated image:
     ```bash
     docker run -d -p 3001:80 --name blue1 web_server_image:blue
     ```

## Conclusion

Throughout this session, we learned how images serve as blueprints for creating containers and how changes to an image do not affect existing containers. Remember, whenever you want to push new code, it's typically better to build a new image and run new containers instead of trying to update the existing ones. Keep practicing these concepts to solidify your understanding of Docker! 🚀
