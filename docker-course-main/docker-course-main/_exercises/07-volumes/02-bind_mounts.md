# Understanding Docker Bind Mounts

## Overview

In this lecture, we dive into the exciting world of Docker bind mounts. The goal is to enable automatic hot reloading of your local development changes within a Docker container, making your development experience much smoother and efficient. Before you jump into the step-by-step guide, here's a quick summary of what to implement:

1. Create a development Dockerfile that runs a development server instead of a production build.
2. Change the command in the Dockerfile to use CMD to run the development server.
3. Build the Docker image from this Dockerfile.
4. Use the `docker run` command with bind mounts for your local source and public directories.
5. Confirm that your application supports hot reloading by modifying files and observing live updates in the browser.

Give it a shot! Try implementing these steps on your own before checking the detailed guide below. 🚀

## Step-by-Step Guide

1. **Create a Development Dockerfile:**

   - Copy your existing Dockerfile and name it `Dockerfile.dev`.
   - Replace any build commands with the command to run your development server (e.g., `CMD ["npm", "start"]`).

2. **Build the Docker Image:**

   - Open your terminal and run:
     ```bash
     docker build -t react-app:dev -f Dockerfile.dev .
     ```

3. **Run the Docker Container:**

   - With the terminal ready, execute the `docker run` command, adding mounts for your local source and public folders:
     ```bash
     docker run -d -p 3000:3000 -v $(pwd)/public:/app/public -v $(pwd)/src:/app/src react-app:dev
     ```

4. **Verify the Container is Running:**

   - Use the below command to check the currently running containers:
     ```bash
     docker ps
     ```
   - Check the logs to ensure everything is running smoothly.

5. **Test Hot Reloading:**
   - Open your browser and navigate to `http://localhost:3000`.
   - Modify a file in your local `src` directory and refresh the browser to see the changes applied instantly.

## Conclusion

Today, we learned how to set up Docker bind mounts to facilitate hot reloading in our React applications. This not only streamlines our development process by automatically applying changes but also maintains the advantages of containerized environments. Remember, practice is key—continue experimenting with Docker in your projects!
