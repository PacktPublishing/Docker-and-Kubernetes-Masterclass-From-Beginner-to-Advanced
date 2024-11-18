# Understanding Docker Commands and Entry Points

## Overview

In this exercise, we will dive into the differences between the CMD and ENTRYPOINT instructions in a Dockerfile. Your task will be to create and experiment with different Dockerfiles to see how each command works in practice. Before moving on to the guide below, give these steps a try on your own:

1. Create a Dockerfile using CMD to echo a message.
2. Build and run a container from this Dockerfile.
3. Create a second Dockerfile using ENTRYPOINT to echo a message.
4. Build and run the container from the ENTRYPOINT Dockerfile.
5. Combine CMD and ENTRYPOINT in a third Dockerfile and see how they interact.

Take some time to implement this before checking out the detailed steps below. You might surprise yourself with what you learn! 🚀

## Step-by-Step Guide

1. **Create a Dockerfile.cmd:**
   - Start with the `FROM alpine:3.20` line.
   - Add a CMD instruction to echo a message, e.g., `CMD ["echo", "Hello from CMD in Dockerfile.cmd"]`.
2. **Build the CMD Dockerfile:**

   - Open your terminal and navigate to the directory containing your Dockerfile.
   - Run the command:
     ```bash
     docker build -t cmd-example -f Dockerfile.cmd .
     ```

3. **Run the CMD Container:**

   - Use:
     ```bash
     docker run cmd-example
     ```

4. **Create a Dockerfile.entrypoint With ENTRYPOINT:**

   - In this Dockerfile, change the instruction to `ENTRYPOINT ["echo", "Hello from ENTRYPOINT in Dockerfile.entrypoint"]`.

5. **Build the ENTRYPOINT Dockerfile:**

   - Similar to CMD, run:
     ```bash
     docker build -t entrypoint-example -f Dockerfile.entrypoint .
     ```

6. **Run the ENTRYPOINT Container:**

   - Use:
     ```bash
     docker run entrypoint-example
     ```

7. **Create a Combined Dockerfile (No Extension):**

   - Start with `FROM alpine:3.20`.
   - Set an ENTRYPOINT, then use CMD to set a default message.
   - Example:
     ```dockerfile
     ENTRYPOINT ["echo"]
     CMD ["Default message"]
     ```

8. **Build the Combined Dockerfile:**

   - Execute:
     ```bash
     docker build -t cmd-entrypoint-example .
     ```

9. **Run the Combined Container:**

   - Simply run:
     ```bash
     docker run cmd-entrypoint-example
     ```

10. **Test Custom Messages:**
    - Override the CMD default by passing a custom message:
      ```bash
      docker run cmd-entrypoint-example "Hello from my custom message!"
      ```

## Conclusion

In this lecture, we explored the differences between CMD and ENTRYPOINT commands in Dockerfiles. We learned that CMD provides a default command that can be overridden, while ENTRYPOINT works as a fixed command that can be extended with additional parameters. By combining both, you can create more flexible and powerful Docker images. Keep experimenting and practicing these concepts as you continue your journey with Docker!
