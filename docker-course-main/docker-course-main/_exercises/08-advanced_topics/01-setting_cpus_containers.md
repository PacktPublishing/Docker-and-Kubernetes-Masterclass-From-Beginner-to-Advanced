# Setting CPU Constraints for Docker Containers

## Overview

In this session, we'll explore how to set CPU constraints for your Docker containers to ensure that they don't overwhelm system resources. This is crucial, as unrestricted CPU usage can lead to performance issues in your environment. Before diving into the step-by-step guide, I encourage you to give the following implementation a try on your own.

Here are the main steps to follow:

1. Use the `docker run` command to check the options for CPU settings.
2. Run a simple Docker container with specific CPU settings.
3. Experiment with CPU shares and compare how they manage resources under constraints.
4. Explore the `CPU quota` and `CPU period` settings for advanced resource management.

Give it a go, and see how it works out for you. If you’re stuck, check below for the detailed guide!

## Step-by-Step Guide

1. **Inspect Docker CPU Options:**
   - Run `docker run --help` and filter for CPU options using `grep CPU`.
2. **Set up a Container with CPU Limits:**

   - Start a container in detached mode, naming it something like `cpu_decimals`, and set the `--cpus` option to specify decimal values (like `0.5`) for CPU usage.
   - Use a command that keeps the container busy, such as `y0 true; do :; done`.

3. **Monitor CPU Usage:**

   - While your container is running, check its CPU usage by executing `docker stats`.

4. **Use CPU Shares to Set Relative Weights:**

   - Stop the previous container using `docker kill cpu_decimals`.
   - Run another container with the `--cpu-shares` option. Play around with different values (like `512` vs `2048`) to see how they affect CPU allocation when resources are scarce.

5. **Experiment with CPU Quota and Period:**

   - Another approach is to define `--cpu-quota` and `--cpu-period` for further resource limitations. For instance, set the `--cpu-period` to `100000` microseconds and the `--cpu-quota` to `75000` for a 75% limit.
   - Run the container and again check `docker stats` to see the effect.

6. **Cleanup:**
   - Make sure to stop all running containers with `docker kill $(docker ps -q)` when you finish experimenting.

## Conclusion

Today, we learned about various methods to impose CPU constraints on Docker containers, ensuring they operate efficiently and don’t hog the system resources. From using `--cpus` and `--cpu-shares` to the more intricate settings like `--cpu-quota` and `--cpu-period`, these tools are essential for managing performance in a resource-limited environment. Keep practicing these techniques, and don't hesitate to explore more Docker functionalities as you continue learning! 🚀
