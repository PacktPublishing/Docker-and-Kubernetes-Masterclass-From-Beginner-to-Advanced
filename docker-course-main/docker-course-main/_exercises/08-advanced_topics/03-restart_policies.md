# Restart Policies in Docker: Managing Container Restarts

## Overview

In this exercise, we will dive into Docker's restart policies that keep our containers running even when they stop or crash. Understanding these policies is essential for ensuring that your applications remain available and resilient. You will explore four primary restart policies: no restart, on-failure, always, and unless-stopped. Before you check out the detailed instructions below, let's try to implement this on your own! Here’s a quick summary of what you'll want to accomplish:

1. Start a container without any restart policy.
2. Implement the `on-failure` restart policy.
3. Learn to limit the number of restart attempts.
4. Use the `always` restart policy.
5. Differentiate between the `always` and `unless-stopped` policies.

Feel free to give these steps a go before peeking at the step-by-step guide! 🚀

## Step-by-Step Guide

### 1. Start without a Restart Policy

- Make sure no containers are running to start fresh. You can do this by using `docker ps` to check.
- Run a container using the BusyBox image with the command `sleep 3; exit 1`. Use a name like `no_race_start`.
  ```bash
  docker run --name no_race_start busybox sh -c "sleep 3; exit 1"
  ```

### 2. Implement `on-failure`

- Remove the previous container:
  ```bash
  docker rm no_race_start
  ```
- Now, run the container again with an `on-failure` restart policy:
  ```bash
  docker run --name race_start_fail --restart on-failure busybox sh -c "sleep 3; exit 1"
  ```

### 3. Limit Restart Attempts

- You can specify how many times Docker should try restarting:
  ```bash
  docker run --name race_start_fail --restart on-failure:3 busybox sh -c "sleep 3; exit 1"
  ```
- Verify the restart count by inspecting the container:
  ```bash
  docker inspect race_start_fail | grep -i restart
  ```

### 4. Use the `always` Policy

- Now, run another container with the `always` policy:
  ```bash
  docker run --name restart_always --restart always busybox sh -c "sleep 3; exit 1"
  ```

### 5. Understand `unless-stopped`

- Finally, create a container with the `unless-stopped` policy:
  ```bash
  docker run --name restart_unless_stopped --restart unless-stopped busybox sh -c "sleep 3; exit 1"
  ```

## Conclusion

In this session, we explored various Docker restart policies, including how to implement them and the differences between them. These policies are fundamental for maintaining the uptime of your applications in production environments. Keep practicing creating and managing these containers, as understanding restart mechanisms will significantly aid your development workflow. Remember, Docker has plenty of features to explore, and every little bit of practice helps! Happy learning! 🌟
