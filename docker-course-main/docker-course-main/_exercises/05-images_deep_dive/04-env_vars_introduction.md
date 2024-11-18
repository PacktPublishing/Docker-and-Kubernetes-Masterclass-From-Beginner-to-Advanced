# Exploring Environment Variables in Docker 🐳

## Overview

In this exercise, we're diving into the crucial aspect of Docker: environment variables. The goal is for you to implement a simple Express application that utilizes environment variables to configure various settings, like the port. Before you check the step-by-step guide, give it a try on your own! Here’s a quick summary of the main steps to guide your exploration:

1. **Initialize a new npm project**.
2. **Install Express.js**.
3. **Create a basic Express application** that listens for requests.
4. **Create a Dockerfile** for containerization.
5. **Define an environment variable** for the application's port.
6. **Build and run your Docker container**, mapping ports as necessary.
7. **Verify the application is functioning by accessing the appropriate endpoint**.

Take a shot at implementing these steps, and only refer to the guide if you get stuck!

## Step-by-Step Guide

1. **Set Up Your Project**:

   - Open your terminal in an empty folder.
   - Run `npm init -y` to create a new npm project.
   - Install Express.js with the command:
     ```bash
     npm install express@4.19.2 --save-exact
     ```

2. **Create Application Files**:

   - Create a `source` directory.
   - Inside, create `index.js` file with the following code:

     ```javascript
     const express = require('express');
     const app = express();
     const port = process.env.PORT || 3000;

     app.get('/', (req, res) => {
       res.send('Hello from Express!');
     });

     app.listen(port, () => {
       console.log(`Server listening on port ${port}`);
     });
     ```

3. **Set Up a Dockerfile**:

   - Create a `Dockerfile` in your project root with the following contents:
     ```dockerfile
     FROM node:22-alpine
     WORKDIR /app
     COPY package*.json ./
     RUN npm ci
     COPY . .
     CMD ["node", "source/index.js"]
     ```

4. **Create a `.dockerignore`**:

   - Add `node_modules` to the `.dockerignore` file to prevent unnecessary copying into the image.

5. **Add Environment Variable**:

   - Update the Dockerfile to include:
     ```dockerfile
     ENV PORT=5000
     ```

6. **Build the Docker Image**:

   - Run the following command in your terminal:
     ```bash
     docker build -t express-app-env-vars .
     ```

7. **Run Your Docker Container**:
   - Start your container with a command like:
     ```bash
     docker run -d -p 5000:5000 express-app-env-vars
     ```
   - Test it by sending a request to `localhost:5000`.

## Conclusion

Congratulations! You’ve successfully built an Express application configured with environment variables and run it within a Docker container. Remember, environment variables play a crucial role in configuring applications across different environments, so mastering them is essential. Keep experimenting and practicing, as this knowledge will serve you well in your Docker journey. 🚀
