# Multi-Stage Builds in Docker: Understanding the Concept and Implementation

Hello! In this session, we’ll dive into a crucial topic in Docker: multi-stage builds. This powerful feature allows you to optimize your Docker images, leading to smaller, faster, and more secure containers. 🚀 Before we jump into the specifics, I encourage you to take a shot at implementing the solution yourself! Here’s a quick overview of the steps you’ll be working with.

## Overview

Here’s a summary of the main steps you'll want to follow to implement multi-stage builds:

1. **Create a New Directory**: Start with an empty directory for your project.
2. **Initialize an NPM Project**: Set up your Node.js project and install necessary dependencies.
3. **Write Your Source Code**: Create a simple `index.js` file with basic express code.
4. **Construct Your Dockerfile**: Develop a Dockerfile that includes multiple stages for building and running your application.
5. **Build and Run Your Image**: Test the entire setup by building the Docker image and running it.

Try to work through these steps on your own before looking at the detailed guide below!

## Step-by-Step Guide

1. **Set Up Your Project**:

   - Create a new empty directory called `multi-stage-builds`.
   - Inside this directory, initialize a new Node.js project using `npm init`.

2. **Install Dependencies**:

   - Install Express in your project with the command: `npm install express@4.19.2`.

3. **Create Directory Structure**:

   - Create a folder named `SRC`.
   - Inside `SRC`, create an `index.js` file for your application code.

4. **Write Your Application Code**:

   - Open `index.js` and add the following boilerplate code:

     ```javascript
     const express = require('express');
     const app = express();

     app.get('/', (req, res) => res.send('Hello from Express!'));

     const port = process.env.PORT || 3000;
     app.listen(port, () => console.log(`Server listening on port ${port}`));
     ```

5. **Setup the `.dockerignore` File**:

   - Create a `.dockerignore` file in your project root, adding `node_modules` to exclude it from the build context.

6. **Create Your Dockerfile**:

   - Start with the following basic structure:
     ```dockerfile
     FROM node:22-alpine
     WORKDIR /app
     COPY package*.json ./
     RUN npm install
     COPY SRC/ ./SRC
     CMD ["node", "SRC/index.js"]
     ```

7. **Build Your Docker Image**:

   - Run the build command:
     ```bash
     docker build -t express-image .
     ```

8. **Run Your Docker Container**:

   - Spin up your container with:
     ```bash
     docker run --rm -d -p 3000:3000 --name express-container express-image
     ```

9. **Test Your Application**:

   - Open a browser and navigate to `http://localhost:3000` to see your application in action.

10. **Experiment with Distroless Images (Optional)**:
    - Try modifying your Dockerfile to use a distroless image in the first stage and see how it impacts your build process.

## Conclusion

In this lecture, we explored the concept of multi-stage builds in Docker, which helps create more efficient and secure images. By separating the build and run processes, we can take advantage of smaller, streamlined containers. Keep practicing these concepts and applying them in your projects. There’s always more to learn!
