# Docker Fundamentals: Understanding Named Volumes

Welcome! In this session, we’ll dive into the concept of named volumes in Docker. You’ll learn how these volumes allow containers to share data seamlessly, enhancing both persistence and collaboration among multiple containers. Before we jump in, let's give you a chance to try it out on your own!

## Overview

In this exercise, we will implement named volumes to share data between multiple containers. Your task is to create a volume, mount it to an Nginx container, and observe how modifications in one container reflect in others, illustrating the power of Docker volumes.

Here’s a quick summary of what you’ll be doing:

1. Create a named volume (let's call it `website-data`).
2. Run an Nginx container and mount the created volume.
3. Spin up additional Nginx containers that also mount the same volume.
4. Modify a file in one container and check the changes in all containers to observe data sharing.
5. Explore the possibilities of horizontal scaling by adding more containers that reference the same volume.

Give it a shot! Try implementing the solution yourself before checking the step-by-step guide below! 🚀

## Step-by-Step Guide

1. **Create the volume**:

   ```bash
   docker volume create website-data
   ```

2. **Run the first Nginx container** and mount the volume:

   ```bash
   docker run -d --name website-main -p 3000:80 -v website-data:/usr/share/nginx/html nginx:1.27.0
   ```

3. **Run additional Nginx containers** (each with a different port) using the same volume:

   ```bash
   docker run -d --name website-readonly1 -p 3001:80 -v website-data:/usr/share/nginx/html:ro nginx:1.27.0
   docker run -d --name website-readonly2 -p 3002:80 -v website-data:/usr/share/nginx/html:ro nginx:1.27.0
   docker run -d --name website-readonly3 -p 3003:80 -v website-data:/usr/share/nginx/html:ro nginx:1.27.0
   ```

4. **Modify a file inside the main Nginx container**:

   - Access the container:
     ```bash
     docker exec -it website-main /bin/sh
     ```
   - Replace the content of `index.html` with:
     ```bash
     echo "Hello World" > index.html
     ```
   - Exit the container.

5. **Check the modifications in the read-only containers**:
   - Use curl to check from each container or directly access them via your browser (accessible at localhost:3001, 3002, and 3003).

By performing these steps, you'll clearly see how data in one volume can be shared across several containers, reinforcing the concept of data persistence and easy scalability.

## Conclusion

Congratulations on successfully implementing your first named volume! 🎉 You've experienced firsthand how volumes help share data among containers and persist data outside the container lifecycle. These concepts are fundamental when building scalable applications in Docker. Keep practicing, and feel free to explore further use cases of named volumes in your projects. The more you experiment, the more proficient you’ll become!
