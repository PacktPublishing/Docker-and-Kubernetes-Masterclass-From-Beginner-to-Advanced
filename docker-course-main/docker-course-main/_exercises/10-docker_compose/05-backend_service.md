# Setting Up Your Back End Service with Docker

Welcome to the lecture on setting up your back end service! 🌟 In this exercise, we’ll explore how to create a back end service using Docker, building our own image locally. Let’s try to implement the solution ourselves before diving into the detailed steps. Below is a brief overview of what we’ll be doing:

## Overview

In this exercise, you will be implementing a back end service that leverages Docker to build your own image locally. Here are the main steps you should aim to follow:

1. Define your back end service using a Docker file and Docker ignore.
2. Pass the build option in your Docker configuration.
3. Set up the required ports and environment variables.
4. Attach your container to the existing network for database access.
5. Ensure your application connects to MongoDB correctly.

Go ahead and give it a shot! Once you feel ready, check out the step-by-step guide below for complete instructions.

## Step-by-Step Guide

1. **Define the Back End Service**:

   - Use your `docker-compose.yml` file to set up the back end service.
   - Instead of using a pre-built image, specify the build context pointing to your back end directory.

2. **Set Build Options**:

   - Use the `build` option rather than `image`.
   - Specify the path for your Docker file if it doesn't follow the default naming convention.

3. **Configure Ports**:

   - Set up the port mapping to allow external access. For example, map port `3000` on your host to port `3000` on your container.

4. **Use Environment Variables**:

   - Include your `.env` file for key-value pairs required for database authentication.
   - Define variables like `MONGO_DB_HOST` which should point to your database container.

5. **Attach to Network**:

   - Ensure your back end container is connected to the existing network so it can communicate with the database using `DB` as the hostname.

6. **Open Your Source Code**:

   - Go to your `server.js` file and ensure the connection settings match your environment variables, specifically for MongoDB.

7. **Combine Environment Variables** (if needed):
   - Use the environment keyword to define multiple sets of environment variables that your application may require.

After you have set everything up, you can start your service with Docker Compose and test to see if everything is functioning as expected.

## Conclusion

In this lecture, we learned how to configure a back end service using Docker by building our own image locally and managing environment variables. Don’t forget to keep practicing and exploring more about Docker. The more you dive into it, the more comfortable you’ll become! Keep up the great work! 🚀
