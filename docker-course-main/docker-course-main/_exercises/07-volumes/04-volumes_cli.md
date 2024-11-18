# Managing Docker Volumes with CLI

Welcome to our guide on managing Docker volumes using the Command Line Interface (CLI)! 🎉 In this lecture, we'll dive deeper into how you can interact with volumes in Docker and ensure your containers are working smoothly with shared data.

## Overview

Before you check out the step-by-step guide, why not give it a shot yourself? Here’s a quick rundown of what you’ll be working on:

1. **List Your Docker Volumes**: Start by checking the existing volumes with `docker volume ls`.
2. **Inspect a Volume**: Use `docker volume inspect <volume_name>` to get details about a specific volume.
3. **Create a New Volume**: Create a new volume using `docker volume create <volume_name>`.
4. **Remove a Volume**: Attempt to remove a volume and understand why it may fail if it's still in use.
5. **Clean Up Dangling Volumes**: Learn how to remove unused volumes with filtering options.

We encourage you to implement these steps before looking at our guide! You might surprise yourself with how much you can accomplish. 😊

## Step-by-Step Guide

### 1. List Existing Volumes

Run the following command to see all your Docker volumes:

```bash
docker volume ls
```

### 2. Inspect a Specific Volume

To get more details on a specific volume, use:

```bash
docker volume inspect <volume_name>
```

Replace `<volume_name>` with the name of the volume you want to inspect.

### 3. Create a New Volume

To create a new Docker volume, run:

```bash
docker volume create <volume_name>
```

Again, replace `<volume_name>` with your chosen name for the volume.

### 4. Attempt to Remove a Volume

If you'd like to delete a volume, you can try:

```bash
docker volume rm <volume_name>
```

If you encounter an error, this means the volume is currently in use by one or more containers!

### 5. Stop and Remove Related Containers

If a volume is in use, first stop the containers using the volume:

```bash
docker stop $(docker ps -a -q)
```

Then remove the containers:

```bash
docker rm $(docker ps -a -q)
```

### 6. Clean Up Dangling Volumes

To remove volumes that aren't associated with any containers, use:

```bash
docker volume rm $(docker volume ls -f dangling=true -q)
```

## Conclusion

And that's a wrap on managing Docker volumes! 🎉 Remember, the key commands you learned are essential for effectively managing data across your containers. Keep practicing these commands, and you'll become more comfortable navigating Docker in no time!
