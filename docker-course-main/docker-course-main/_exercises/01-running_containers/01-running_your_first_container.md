# Running Your First Docker Container

## Overview

In this exercise, we will learn how to run our very first Docker container using the NGINX web server. By doing this, you'll not only get familiar with Docker commands but also see your container in action through your browser! 🎉

Here’s a high-level summary of what we'll be doing:

1. Pull the NGINX image from Docker Hub.
2. Run the NGINX container and observe the logs.
3. Start the container in detached mode to free up your terminal.
4. Map the local port to the container’s port for HTTP requests.
5. Verify that the container is running by accessing it through a web browser.

Take a moment to try implementing this on your own before moving to the step-by-step guide below!

## Step-by-Step Guide

Follow these steps to successfully run your first Docker container:

1. **Pull the NGINX Image**: Open your terminal and execute the command:

   ```
   docker pull nginx
   ```

2. **Run the Container**: Start the NGINX container by running:

   ```
   docker run nginx
   ```

   (Note: For now, you'll see logs; proceed to the next step for a better experience.)

3. **Run in Detached Mode**: Stop the previous container using `CTRL+C` and run it again in detached mode:

   ```
   docker run -d nginx
   ```

4. **Map Local and Container Ports**: Execute the following command to map your local port 8080 to the container's port 80 and to add a name of `web-server` to the container:

   ```
   docker run -d -p 8080:80 --name web-server nginx
   ```

5. **Verify the Container**: Open your web browser and go to `http://localhost:8080`. You should see the NGINX welcome page! 🎈

6. **Check Running Containers**: In the terminal, run:

   ```
   docker ps
   ```

   to see your running container.

7. **Stop the Container**: Stop the running container gracefully by using:
   ```
   docker stop web-server
   ```

## Conclusion

Congratulations on running your first Docker container! 🎊 You’ve learned how to pull an image, run a container, map ports, and verify the setup via a web browser. Remember to practice these commands as we will cover more advanced topics in the upcoming lectures. Keep exploring and happy Docking!
