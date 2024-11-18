# Creating and Copying from a Local HTML File in Docker

Welcome! In this guide, we’ll walk through the process of copying an `index.html` file from your local machine into a Docker image using a Docker file. This is a great practice to understand how to manage files within Docker containers, especially when customizing a web server like NGINX. 🌐

## Overview

Before diving into the step-by-step guide, let's try to get a sense of what you'll implement. Here’s a high-level summary of the steps you should take:

1. Create your own `index.html` file in the Docker file's context directory.
2. Use the Docker file to copy this file into the appropriate directory inside the Docker image.
3. Change the ownership of the `index.html` file to the correct user and group (`nginx:nginx`).
4. Build the Docker image with your changes.
5. Run a container from your newly created image.

Give it a shot! Try to implement these steps on your own before moving on to the detailed guide below.

## Step-by-Step Guide

1. **Create Your `index.html`**:

   - Start by creating a new `index.html` file in the directory where your Docker file is located. Add your custom HTML content with a welcoming message.

2. **Update the Docker File**:

   - In your Docker file, use the `COPY` command to copy your `index.html` to the NGINX HTML directory:
     ```Dockerfile
     COPY index.html /usr/share/nginx/html/index.html
     ```

3. **Change Ownership**:

   - Ensure that the HTML file has the right owner by adding the `RUN` command to change ownership to NGINX:
     ```Dockerfile
     RUN chown nginx:nginx /usr/share/nginx/html/index.html
     ```

4. **Build the Docker Image**:

   - Run the following command to build your Docker image:
     ```bash
     docker build -t web_server_image .
     ```

5. **Run the Docker Container**:

   - Start your container with:
     ```bash
     docker run -d -p 80:80 web_server_image
     ```

6. **Test Your Setup**:

   - Use `curl http://localhost` to check if your custom HTML file is served correctly. If you encounter a `403 Forbidden` error, check the ownership of the file.

7. **Clean Up**:
   - If you change your Docker file or the HTML file, don't forget to rebuild the image and rerun the container.

## Conclusion

Congratulations on getting through this process! 🎉 You've successfully created a Docker file that copies an HTML file from your local machine into a Docker image and serves it through NGINX. Remember to always consider file ownership when working with Docker, as it can save you from confusing errors in the future. Keep practicing, and soon you'll be comfortable creating and managing Docker files and images with ease!
