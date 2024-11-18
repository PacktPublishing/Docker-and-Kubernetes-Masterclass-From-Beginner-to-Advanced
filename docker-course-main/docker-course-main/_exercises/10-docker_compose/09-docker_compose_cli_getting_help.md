# Getting Help with Docker Compose CLI

## Overview

In this exercise, we'll explore how to effectively use the Docker Compose CLI to get help with commands and options. The goal is to familiarize yourself with the `--help` option, which is a valuable tool when navigating the Docker Compose commands. Before diving into the step-by-step guide, why not challenge yourself to implement the solution on your own? Here’s a quick summary of what you’ll try:

1. Start a Docker Compose service in detached mode.
2. Use the `docker-compose stats --help` command to learn about the stats command and its options.
3. Run `docker-compose stats` to view live statistics for your containers.
4. Experiment with passing different options and specifying individual services.
5. Clean up by taking down all the services and volumes.

Give it a shot! 🚀

## Step-by-Step Guide

1. **Start Your Services**: Open your terminal and run the following command to start your services in detached mode:
   ```bash
   docker-compose up -d
   ```
2. **Access Help Information**:
   To understand the available options for the stats command, type:

   ```bash
   docker-compose stats --help
   ```

   Take note of the options you can use.

3. **View Statistics**:
   Now let's see the live statistics of your running containers:

   ```bash
   docker-compose stats
   ```

4. **Filter Statistics by Service**:
   If you want to get stats for a specific service, you can specify it like this:

   ```bash
   docker-compose stats <service-name>
   ```

5. **Stop and Clean Up**:
   Once you’re done, make sure to stop all services and clean up by removing the containers, networks, and volumes:
   ```bash
   docker-compose down --volumes
   ```

## Conclusion

That’s a wrap! We’ve covered how to utilize the help feature in the Docker Compose CLI for better navigation and management of your containers. Remember, the `--help` flag is available for all commands and can be your best ally when exploring new features. Keep practicing these commands, and you'll enhance your Docker skills in no time! 🌟
