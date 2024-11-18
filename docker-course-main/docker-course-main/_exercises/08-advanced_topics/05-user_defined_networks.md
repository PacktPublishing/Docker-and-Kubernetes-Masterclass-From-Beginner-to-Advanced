# User-Defined Networks in Docker

Welcome! In this guide, we'll explore how to create and manage user-defined networks in Docker, which will allow our containers to communicate with one another seamlessly. 🤝

## Overview

Before diving into the details, let’s set the stage. Your goal is to implement user-defined networks that enable containers to connect and interact more effectively. Here’s a high-level plan for you to try on your own before checking the step-by-step guide:

1. **Use the Docker network command with the help flag** to see available options.
2. **Create your user-defined network** using `docker network create`.
3. **Connect a container to the new network** using the `docker network connect` command.
4. **Inspect the connections** to verify that the container is indeed linked to the network.
5. **Test the communication** between the connected containers.
6. **Clean up** by removing any containers and networks used during the exercise.

Now, give it a shot! Implement the solution above and see how it goes before looking at the detailed instructions below.

## Step-by-Step Guide

1. **Open your terminal.**
2. **List Docker networks:** Run `docker network ls`.
3. **Create a new network:**
   ```bash
   docker network create app-net
   ```
4. **Spin up a web server container:**
   ```bash
   docker run -d --name web-server nginx
   ```
5. **Connect the web server to your new network:**
   ```bash
   docker network connect app-net web-server
   ```
6. **Inspect the network to confirm connection:**
   ```bash
   docker network inspect app-net
   ```
7. **Start another container and connect it to the network:**
   ```bash
   docker run -it --network app-net alpine sh
   ```
8. **Install curl in the Alpine container:**
   ```bash
   apk add curl
   ```
9. **Test communication with the web server:**
   ```bash
   curl web-server
   ```
10. **Exit the interactive container.**
11. **Remove all containers:**
    ```bash
    docker rm $(docker ps -aq)
    ```
12. **Remove the created network:**
    ```bash
    docker network rm app-net
    ```

## Conclusion

In this session, we learned how to create user-defined networks in Docker, which not only allows for container communication but also provides isolation between networks. Remember, utilizing networks effectively is crucial for building scalable and organized applications. Keep practicing these skills, and don’t hesitate to experiment with more complex network setups! You’ve got this! 🚀
