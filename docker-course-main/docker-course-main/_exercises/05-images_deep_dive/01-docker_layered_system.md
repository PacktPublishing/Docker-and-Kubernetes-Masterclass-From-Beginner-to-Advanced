# Understanding the Layered Architecture of Docker

## Overview

In this exercise, the focus is on exploring Docker's layered architecture using a Dockerfile from a containerized Express app project. Before diving into the step-by-step guide, give yourself a chance to implement the solution on your own. Here’s a brief outline of what you’ll be doing:

1. Retrieve the Dockerfile from the Express app project (or download the zipped resources).
2. Execute the Docker build command to create the image.
3. Use the Docker history command to visualize the layers of your image.
4. Investigate the Dockerfile of the base image (Node 22) to understand the contributing factors to image size.
5. Reflect on ways to optimize your image size based on the findings.

Now, it’s your turn! Try to implement the solution yourself before checking out the detailed guide below. 🚀

## Step-by-Step Guide

1. **Download the Resources**: If you didn't complete the project, download the zipped folder from the lecture resources and extract it.
2. **Open Terminal**: Navigate to the folder where you have extracted the files.
3. **Build the Docker Image**: Run the following command to build your Docker image:
   ```bash
   docker build -t express-app .
   ```
   This will create an image tagged as `express-app` from the files in the current directory.
4. **Check Your Docker Images**: Use the command below to view your images:
   ```bash
   docker images
   ```
5. **View Image Layers**: To examine the layers of your image, run:
   ```bash
   docker history express-app
   ```
6. **Explore the Node 22 Dockerfile**:
   - Search for the Node 22 Dockerfile online or on Docker Hub.
   - Review the commands to see how they relate to the layers in your Express app image.
7. **Analyze Image Size**: Pay attention to which layers are contributing significantly to the final image size and consider potential optimizations.

## Conclusion

In this lecture, we uncovered the fascinating concept of Docker's layered architecture. We learned that each command in a Dockerfile creates a distinct layer in the final image and how this architecture can lead to improved caching and faster build times. Understanding these layers not only helps in efficient image management but also provides insights into potential optimizations. Keep experimenting with Docker and don’t hesitate to dive deeper into these concepts as you continue your learning journey! 💻
