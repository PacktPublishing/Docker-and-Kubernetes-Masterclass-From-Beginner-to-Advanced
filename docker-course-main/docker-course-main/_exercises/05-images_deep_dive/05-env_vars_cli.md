# Environment Variables in Docker: Implementation Guide 🌟

## Overview

In this exercise, we’ll dive into using environment variables in Docker to configure your applications without modifying the Dockerfile each time. You'll learn how to set default values, override them during container launch, and explore using `.env` files for better management.

Before checking out the step-by-step guide, let's try to implement the solution on your own! Here’s a quick summary of what you’ll do:

1. Clean up your Docker environment by removing existing containers and images.
2. Set up a Dockerfile and specify a default environment variable.
3. Build and run the Docker image.
4. Override the default environment variable when starting the container.
5. Experiment with different port assignments and verify the results.

Give it a shot! Once you’re done, feel free to look at the guide below for further details.

## Step-by-Step Guide

1. **Clean the Docker Environment**:

   - Use `docker kill` to stop all running containers.
   - Run `docker ps -aq` combined with `docker rm` to remove all containers.
   - Use `docker rmi -f $(docker images -q)` to force-remove all images (if necessary).

2. **Set Default Environment Variables in Dockerfile**:

   - Open your Dockerfile and add an environment variable like this:
     ```
     ENV APP_NAME="my awesome application"
     ```

3. **Build the Docker Image**:

   - Execute the command:
     ```bash
     docker build -t express:5000 .
     ```

4. **Run the Docker Container**:

   - Start your container by mapping the necessary ports:
     ```bash
     docker run -d -p 5000:5000 --name awesome_app express:5000
     ```

5. **Override Environment Variables**:

   - Run the container again, this time overriding the default port:
     ```bash
     docker run -e PORT=5001 -d -p 5001:5001 --name express-5001 express
     ```

6. **Check the Output**:

   - Use `curl http://localhost:5001` to confirm your setup is working as expected.
   - You can also check logs using `docker logs express-5001` to see the running outputs.

7. **Experiment with Additional Variables**:
   - Try running containers with different environment variables and ports, such as:
     ```bash
     docker run -e PORT=8080 -d -p 8080:8080 --name express-8080 express
     ```

## Conclusion

Great job! 🎉 You've just learned how to manage environment variables with Docker, set defaults, and override them dynamically. This flexibility is key in making your Docker containers more adaptable and robust for development. Keep exploring and practicing, as there's always more to learn in the world of Docker!
