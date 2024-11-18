# Implementing a Dockerfile for NGINX

In this guide, we’ll learn how to create a Dockerfile to automate the setup of an NGINX server with the necessary configurations and dependencies.

## Overview

Before diving into the step-by-step process, let's try to implement this on your own! Here’s a quick rundown of what you should aim to do:

1. Create a new directory and add a Dockerfile inside it.
2. Define the base image as NGINX version 1.27.0.
3. Install any required dependencies using the `APT-get` command.
4. Build the Docker image and tag it appropriately.
5. Run the Docker container and confirm the installation of your dependencies.

Give it a shot, and once you think you’re done, you can check below for the step-by-step guide to see how closely it matches your implementation! 🚀

## Step-by-Step Guide

1. **Create a new folder**: Start by creating an empty folder dedicated to your Docker project.
2. **Write the Dockerfile**: Open a text editor (like VS Code) and create a new file named `Dockerfile`.

3. **Define the base image**:

   ```dockerfile
   FROM nginx:1.27.0
   ```

4. **Install dependencies**: In your Dockerfile, add the following lines to install VIM:

   ```dockerfile
   RUN apt-get update && apt-get install -y vim
   ```

5. **Build the Docker image**: Open your terminal, navigate to the folder containing your Dockerfile, and run:

   ```bash
   docker build -t web-server-image .
   ```

6. **Run the Docker container**: Execute the following command:

   ```bash
   docker run -d web-server-image
   ```

7. **Verify installation**: Check if the VIM editor is installed by running:
   ```bash
   docker exec -it <container_id> vim
   ```

## Conclusion

In this guide, we learned how to efficiently create a Dockerfile for NGINX, automating the installation of necessary dependencies and building a custom Docker image. Remember to practice these steps several times to gain confidence in your skills. The more you experiment with Docker, the more familiar you will become with its functionalities and best practices. Keep learning and exploring! 🌟
