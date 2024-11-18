# Traffic Generator Implementation Guide

Welcome! In this lecture, we're going to dive into creating a simple yet fascinating traffic generator using a shell script. This is an optional lecture, so feel free to jump in only if you're interested in coding along. By the end, we’ll even push the resulting image to Docker Hub. If you want to try implementing the solution yourself first, here’s an overview to guide you. 🚀

## Overview

Before you peek at the step-by-step guide, why not give it a shot on your own? Here’s a quick summary of what you’ll want to implement:

1. Create a shell script called `traffic_gen.sh`.
2. Add validation to ensure the right number of arguments are provided (target and interval).
3. Set up a loop that continuously sends requests to the specified target at a defined interval.
4. Format the output to display the request time and response received.
5. Test the script locally to ensure it functions correctly.
6. Write a Dockerfile to containerize your traffic generator.
7. Build and push your image to Docker Hub.

Give it a go! Try to implement the above steps before moving on to the detailed guide.

## Step-by-Step Guide

Let’s break this down into manageable steps:

1. **Create the Script:**

   - Open your favorite IDE and create a new file named `traffic_gen.sh`.
   - Add the shebang (`#!/bin/bash`) at the top of the file.

2. **Input Validation:**

   - Check if the number of arguments passed is less than two. If so, display a usage message.

3. **Store Parameters:**

   - Capture the first argument as the target and the second as the interval.

4. **Creating the Request Loop:**

   - Implement a while loop that continually:
     - Fetches the current date and time.
     - Sends a request to the target using curl.
     - Displays the request time and response.

5. **Add Execution Permission:**

   - Don’t forget to grant execute permissions using `chmod +x traffic_gen.sh`.

6. **Test the Script:**

   - Ensure your target service (like an API) is running locally and execute your script with a target and interval.

7. **Dockerize the Script:**

   - Create a Dockerfile, ensuring to install `curl` and copy your script into the container.
   - Adjust the shebang for Alpine if necessary.

8. **Build and Push to Docker Hub:**
   - Use Docker commands to build your image and push it to your repository on Docker Hub.

## Conclusion

Congratulations on reaching the end of this lecture! You've successfully constructed a traffic generator and learned how to package it in a Docker container. Remember, the key to mastering these concepts is continuous practice and exploration. Keep experimenting, and don't hesitate to push your limits as you learn more about Kubernetes and cloud-native applications.
