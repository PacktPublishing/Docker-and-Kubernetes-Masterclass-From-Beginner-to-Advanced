# Mastering Docker CLI Commands - Part 1

## Overview

In this session, we're diving deep into Docker command-line interface (CLI) commands, focusing on how to manage containers and images effectively. Before jumping into the steps, why not give it a shot yourself? Here’s a brief outline of what you’ll aim to implement:

1. Check existing images with `docker images`.
2. Pull the latest Ubuntu image using `docker pull ubuntu`.
3. Run an Ubuntu container and observe its behavior.
4. Start a new Nginx container in detached mode.
5. Manage existing containers by starting, stopping, and removing them.
6. Use filters to find specific containers and perform cleanup operations.

Try implementing these steps on your own, and once you're ready, check out the detailed guide below! 🚀

## Step-by-Step Guide

1. **Check Existing Images**: Run `docker images` to see which images you have stored locally.
2. **Pull Ubuntu Image**: Execute `docker pull ubuntu` to download the latest Ubuntu image from Docker Hub.

3. **Run an Ubuntu Container**: Type `docker run ubuntu` to start the container. Notice that it will exit immediately since there's no command to keep it alive.

4. **Run Nginx Container**: Use `docker run -d --name web_server nginx` to start a new Nginx container in detached mode. This will allow it to run continuously.

5. **Check Running Containers**: Run `docker ps` to see active containers and `docker ps -a` to see all containers, both running and exited.

6. **Start a Stopped Container**: To restart an existing but stopped container, use `docker start <container_id>` where `<container_id>` is the ID of the stopped container.

7. **Stop a Running Container**: Execute `docker stop <container_id>` to gracefully stop an active container.

8. **Remove Containers**: Clean up by running `docker rm <container_id>` for any containers you no longer need.

9. **Filtering Containers**: Utilize filters with `docker ps --filter "name=web_server"` to find specific containers by name.

10. **Cleanup**: To stop all running containers at once, combine commands like this: `docker stop $(docker ps -q)`. For removing all stopped containers, use `docker rm $(docker ps -a -q)`.

## Conclusion

We’ve covered a lot about managing Docker containers and images using the CLI. Remember, practice makes perfect! By working with these commands, you’ll build a solid foundation for using Docker effectively. Keep experimenting and learning more about the Docker ecosystem, and don’t hesitate to reach out if you have any questions. Happy Dockering! 🐳
