# Multi-Stage Builds with Distroless Images

Welcome to another exciting session! In this lecture, we dive into the world of multi-stage builds using distroless images with Node.js. 🎉 If you're ready to implement a clean and efficient Docker setup, you've come to the right place!

## Overview

In this exercise, you're going to learn how to use multi-stage builds effectively. We'll focus on installing dependencies in one stage and running your application in a distroless image in the next. Before you dive into the step-by-step guide, here’s a quick summary to get you started:

1. Define the first stage and name it "build" to install dependencies using a Node.js base image.
2. Set up the work directory and copy your `package.json` files into it.
3. Run `npm install` to install your application’s dependencies.
4. Create a second stage using a distroless image.
5. Copy the installed `node_modules` folder from the first stage to the second.
6. Copy your application source code to the second stage.
7. Specify the command to run your application.

Now, why not give it a shot on your own before peeking at the step-by-step guide? Challenge yourself! 💪

## Step-by-Step Guide

Here’s how to implement the solution we discussed:

1. Start with a Dockerfile that specifies the first stage using Node.js (e.g., `FROM node:22-alpine AS build`).
2. Set your working directory to `/app` (use `WORKDIR /app`).
3. Copy your `package.json` and `package-lock.json` files into the work directory (`COPY package*.json ./`).
4. Run `npm install` to install your dependencies (`RUN npm ci`).
5. Add another stage by specifying the distroless base image (e.g., `FROM gcr.io/distroless/nodejs`).
6. Set the work directory again (`WORKDIR /app`).
7. Use the `COPY --from=build /app/node_modules ./node_modules` command to copy the `node_modules` folder from the first stage.
8. Copy your application's source code to this stage (`COPY . .`).
9. Specify the command to run your application, e.g., `CMD ["your-app-file.js"]`.

With these steps, you will create an efficient Docker image that utilizes multi-stage builds nicely!

## Conclusion

Great work on exploring multi-stage builds and distroless images! We've learned how to separate the installation of dependencies from the running of our application, creating a more efficient and secure environment. Keep practicing these concepts, as they will serve you well in your Docker journey. Remember, the key takeaway is understanding how to leverage multiple stages to streamline your Docker builds. Keep up the great work, and let's keep that curiosity alive! 🚀
