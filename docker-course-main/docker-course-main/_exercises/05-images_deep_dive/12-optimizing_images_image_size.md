# Optimizing Docker Images: Reducing Image Size

Welcome! In this guide, we'll explore strategies to optimize Docker images, particularly focusing on reducing image sizes while maintaining functionality. Let's dive in!

## Overview

In this exercise, we'll cover best practices to create Docker images that are smaller, faster, and more efficient. Before jumping to the detailed instructions, I encourage you to try to implement these steps on your own:

1. Create a new clean directory for your project.
2. Initialize a new Node.js project and install necessary dependencies.
3. Write your first Dockerfile using a suitable base image.
4. Build your Docker image and observe the size.
5. Experiment with different base images like `node:slim` and `node:alpine`.

Give it a go! After you try these steps, you can refer to the step-by-step guide below for detailed instructions. 🚀

## Step-by-Step Guide

1. **Create a New Directory**:

   - Open your terminal and create a new clean directory. This will help keep your workspace organized.

2. **Initialize a Node.js Project**:

   - Navigate to the new directory and run:
     ```bash
     npm init -y
     ```
   - Install required dependencies:
     ```bash
     npm install express@4.19.2 --save-exact
     npm install typescript@5.5.3 @types/express@4.17.21 --save-dev --save-exact
     ```

3. **Create Your Dockerfile**:

   - In your IDE, create a `Dockerfile.size`. Start with the following content:
     ```Dockerfile
     FROM node:22
     WORKDIR /app
     COPY package*.json ./
     RUN npm install
     COPY index.js ./
     CMD ["node", "index.js"]
     ```
   - Create an `index.js` file with a simple console log statement:
     ```javascript
     console.log('Hello World');
     ```

4. **Build Your Docker Image**:

   - In the terminal, build your Docker image:
     ```bash
     docker build -t image-size:vanilla -f Dockerfile.size .
     ```
   - Check the image size using:
     ```bash
     docker images
     ```

5. **Experiment with Smaller Base Images**:
   - Modify your Dockerfile to use smaller base images, first changing it to:
     ```Dockerfile
     FROM node:22-slim
     ```
   - Rebuild your Docker image and check the size.
   - Repeat this process with `FROM node:22-alpine` to see the impact on both size and build time.

## Conclusion

Throughout this exercise, we’ve highlighted how optimizing Docker images can significantly affect build times and image sizes. By selecting appropriate base images and understanding the implications of development dependencies, you can create images that are efficient and tailored to your needs. Keep experimenting with different configurations, and you'll become more adept at optimizing Docker images. Happy coding! 🐳
