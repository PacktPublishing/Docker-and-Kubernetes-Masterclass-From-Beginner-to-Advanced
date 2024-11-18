# Building Your First Color API with Docker and Express

Welcome to the session where we'll be creating a simple Express application that we'll build upon as we delve into the fascinating world of Kubernetes! 💻 This initial exercise is all about setting up your project so you can see how everything fits together. Before diving into the step-by-step guide, I encourage you to give it a shot on your own. Here’s a brief overview of what you’ll be trying to implement:

## Overview

In this exercise, you'll set up an Express application containerized with Docker. Here are the main steps you'll need to follow:

1. Initialize an NPM project and create a `package.json` file.
2. Install the Express package (version 4.19.2) using NPM.
3. Set up your project structure by creating a `source` folder and an `index.js` file.
4. Implement a simple Express server that listens on port 80 and serves a basic HTML response.
5. Create a Dockerfile and a `.dockerignore` file to configure your Docker setup.
6. Build your Docker image and run it as a container, mapping the necessary ports.

Take your time to work through these steps! Once you feel comfortable with the implementation, go ahead and check out the step-by-step guide below.

## Step-by-Step Guide

Here’s a concise guide to help you get started:

1. **Initialize the NPM Project**:

   - Open your terminal and run: `npm init -y`

2. **Install Express**:

   - Run the command: `npm install express@4.19.2 --save-exact`

3. **Project Structure**:

   - Create a folder named `source`.
   - Inside the `source` folder, create an `index.js` file.

4. **Set Up Your Express App**:

   - In `index.js`, import Express and create a simple server that listens on port 80.
   - Add a route to respond with plain HTML.

5. **Create a Dockerfile**:

   - Compose a Dockerfile that starts from a Node base image.
   - Specify the working directory and copy files accordingly. Finally, run your server with Node.

6. **Create a .dockerignore File**:

   - Include `node_modules` to prevent them from being copied into the Docker image.

7. **Build the Docker Image**:

   - Use the command: `docker build -t color-api .`

8. **Run Your Docker Container**:

   - Execute: `docker run -p 3000:80 --name color-api color-api`
   - Check the response by navigating to `http://localhost:3000` in your browser.

9. **Clean Up**:
   - Stop and remove your container using: `docker stop color-api` and `docker rm color-api`.

## Conclusion

Congratulations on completing your first coding exercise! You've set up an Express application, learned to containerize it with Docker, and confirmed that everything is functioning as intended. This foundational knowledge will be crucial as we dive deeper into Kubernetes in upcoming sessions. Keep practicing, and don't hesitate to explore further! 🚀
