# Managing Docker Images from the Command Line

## Overview

In this session, we're diving into the world of Docker image management through the command line interface (CLI)! By the end of this exercise, you should be able to tag, pull, remove, and push images in Docker seamlessly. Here’s a quick rundown of what you’ll want to tackle:

1. Understand image tagging and the significance of different image sizes.
2. Pull multiple tags of a Docker image.
3. Create a Dockerfile and build an image from it.
4. Tag your image appropriately and push it to Docker Hub.

Before you scroll down to the step-by-step guide, why not give these tasks a try on your own? 😊 You might surprise yourself with what you can achieve!

## Step-by-Step Guide

1. **Explore Image Tags**: Start with a sample image, like "node", and familiarize yourself with tags like `lts-slim`, `lts-alpine`, and others. Understand their sizes and vulnerabilities.

2. **List Local Images**: Use the command `docker images` to see the images on your local machine.

3. **Remove Images**: Identify any images you no longer need and try removing them with `docker image rm <image_id>`. If an image can't be deleted, force it with `docker image rm -f <image_id>`.

4. **Pull All Tags**: Fetch multiple tags of an image using the command `docker pull <image_name> --all-tags`, but keep it to lighter images like "hello-world" to avoid unnecessary downloads.

5. **Create a Dockerfile**: In your working directory, create a basic Dockerfile with an Ubuntu image and a simple command.

6. **Build Your Image**: Use `docker build -t <image_name>:<tag> .` to build your image from the Dockerfile.

7. **Tag Your Image**: Tag your newly created image using `docker tag <existing_image_name>:<tag> <your_username>/<new_image_name>:<new_tag>`.

8. **Push to Docker Hub**: Finally, use `docker push <your_username>/<new_image_name>:<new_tag>` to push your tagged image to Docker Hub.

## Conclusion

In this lecture, we covered crucial operations on managing Docker images, including tagging, pulling, removing, and pushing images through the command line. Mastering these skills forms a foundation for efficient Docker workflows. Keep practicing these commands, play around with different images, and explore Docker Hub! Your journey in containerization has only just begun. 🚀
