# Setting Up Volumes and Networks in Docker Compose 🌐

## Overview

In this exercise, we will wrap up the setup of our database service by creating a volume for persistent storage and defining a network. The goal is for you to implement this solution on your own, enhancing your understanding of Docker Compose. Before diving into the step-by-step guide, here's a brief summary of what you will accomplish:

1. Define a volume for MongoDB data in your Docker Compose file.
2. Set up a network for the database service.
3. Configure the services in the Docker Compose file to utilize the created volume and network.
4. Verify the successful creation of both the volume and the network.

Challenge yourself to implement these steps before checking the detailed guide below!

## Step-by-Step Guide

1. **Open your Docker Compose file** (`docker-compose.yaml`).
2. **Create a volume**:
   - Add a `volumes` section at the top level and define your volume name (e.g., `MongoDB-data`).
3. **Set up a network**:
   - Similarly, add a `networks` section and define your network (e.g., `key-value-net`).
4. **Configure the service**:
   - In the service configuration (e.g., MongoDB), specify the `volume` you created under the service's `volumes` list, and point its source to the defined volume name with the target set to `/data/db`.
   - Under the same service, reference the network in the `networks` section.
5. **Run Docker Compose**: Open your terminal and run `docker-compose up -d` to create everything based on your configuration.
6. **Verify creation**: Once the command completes, check your Docker volumes and networks to confirm they have been created successfully:
   - Use `docker volume ls` to see your volumes.
   - Use `docker network ls` to see your networks.

## Conclusion

In this exercise, we've successfully defined both a volume for persistent data storage and a network for our database service using Docker Compose. Remember that both resources need to be utilized in at least one service in order to be created. Keep experimenting with Docker Compose, and you'll keep uncovering powerful features that will help you in your development journey. Happy coding! 🚀
