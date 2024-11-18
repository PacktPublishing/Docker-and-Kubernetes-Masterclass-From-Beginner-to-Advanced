# Docker Fundamentals: Docker Hub Login & CLI Usage

## Overview

In this exercise, we're diving into how to create a Docker Hub account, log in using the CLI, and manage Docker images. Before we proceed with the step-by-step guide, I encourage you to try implementing the solution on your own! Here’s a quick summary of the steps:

1. Create a Docker Hub account using either email or via GitHub/Google.
2. Log in to the Docker CLI with your username and use a personal access token instead of a password.
3. Use `docker search` to find an image like Ubuntu.
4. Download images using `docker pull`, specifying the version tag if desired.
5. Check your downloaded images using `docker images`.

Now, go ahead and give it a shot! Remember, practice makes perfect! 😄

## Step-by-Step Guide

1. **Creating a Docker Hub Account**:

   - Go to Docker Hub and click on "Sign Up."
   - Enter your email, username, and password, or sign up using GitHub or Google.
   - Complete the sign-up process and verify your account if necessary.

2. **Logging in via the CLI**:

   - Open your terminal.
   - Run the command `docker login`.
   - Enter your username.
   - Instead of your password, use a personal access token:
     - Go to Docker Hub, navigate to your profile, and find the "Security" section.
     - Create a new access token, name it (like "Docker-CLI"), and set the permissions.
     - Copy the generated token, return to your terminal, paste it, and press enter.
   - If successful, you'll see "login succeeded."

3. **Searching for Images**:

   - Ensure Docker is running by using the command `docker info`.
   - Use `docker search ubuntu ` to see available Ubuntu images.

4. **Pulling Images**:

   - To download the latest Ubuntu image, run `docker pull ubuntu`.
   - If you want a specific version, use `docker pull ubuntu:24.04`, substituting "24.04" for any version you prefer.
   - Check if the images were downloaded successfully using `docker images`.

5. **Verifying and Managing Images**:
   - Run `docker images` to see a list of your downloaded images, including their IDs and sizes.
   - Notice how different tags may reference the same image.

## Conclusion

Today, we explored how to set up your Docker Hub account, log in via the CLI, and work with Docker images. This foundational knowledge will help you navigate through Docker and manage containers more efficiently. Keep experimenting with different commands, and don’t forget to check back for more advanced topics in our next lecture. Happy Dockering! 🚀
