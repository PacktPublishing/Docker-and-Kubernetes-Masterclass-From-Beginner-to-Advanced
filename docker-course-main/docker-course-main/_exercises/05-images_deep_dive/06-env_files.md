# Using .env Files for Simplified Docker Environment Variables

## Overview

In this guide, we'll explore how to efficiently manage environment variables in Docker using .env files. Instead of adding each variable in the Docker run command, we'll learn how to create a more readable and structured approach using these files. Before you dive into the step-by-step guide, here’s a quick summary of what you’ll be doing:

1. Understand the importance of using .env files for managing environment variables.
2. Create a `.env` file for production settings.
3. Create a `.env` file for development settings.
4. Update the `.dockerignore` file to prevent sensitive information from being included in the Docker image.
5. Run your containers using the `.env` files you created.

Give it a go! Try implementing the solution on your own before checking the detailed instructions below. 💪

## Step-by-Step Guide

1. **Update the `.dockerignore` File**: Open your `.dockerignore` file and add a line to exclude all `.env` files to protect sensitive information:

   ```
   *.env
   ```

2. **Create a Production `.env` File**:

   - Name it `.env.prod`.
   - Add the following lines, adjusting port and app name as necessary:
     ```
     PORT=9000
     APP_NAME="my prod app"
     ```

3. **Run the Production Container**: Use the command below to start your container with the production settings:

   ```bash
   docker run --env-file .env.prod -d -p 9000:9000 --name express-prod express
   ```

4. **Confirm Setup**: Check that the server is running on port 9000:

   ```bash
   docker logs express-prod
   curl http://localhost:9000
   ```

5. **Create a Development `.env` File**:

   - Name it `.env.dev`.
   - Use similar syntax to set the development environment:
     ```
     PORT=3000
     APP_NAME="my dev app"
     ```

6. **Run the Development Container**: Execute the command to run your development container:

   ```bash
   docker run --env-file .env.dev -d -p 3000:3000 --name express-dev express
   ```

7. **Verify Development Setup**: Confirm that your development app is running correctly on port 3000:
   ```bash
   docker logs express-dev
   curl http://localhost:3000
   ```

By following these steps, you'll have a more organized and secure way to manage your Docker environment variables. 🎉

## Conclusion

In this session, we learned how to use .env files to handle environment variables more effectively in Docker. By creating separate files for production and development environments, we minimized clutter in our Docker commands and improved security by keeping sensitive information out of our images. Keep practicing with these concepts, as they are key to working with Docker efficiently.
