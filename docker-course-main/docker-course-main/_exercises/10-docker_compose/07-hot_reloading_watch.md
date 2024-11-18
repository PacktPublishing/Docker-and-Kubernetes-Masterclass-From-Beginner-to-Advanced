# Hot Reloading with Docker Compose

Welcome to our guide on implementing hot reloading in your Docker Compose project! In this section, we'll explore how to enable fast feedback during development by automatically syncing file changes in your backend services. 🚀

## Overview

Before we dive into the step-by-step guide, here's a high-level summary of what you should aim to implement:

1. **Create a bind mount** or configure a watch setting in your Docker Compose file.
2. **Define the paths** you wish to sync from your local machine to your Docker container.
3. **Run Docker Compose** with the watch flag to enable hot reloading.
4. **Verify changes** made in the code are reflected in your running containers.

Take a moment to try implementing this on your own. Just follow the steps outlined above, and see if you can get hot reloading working before checking the detailed guide below!

## Step-by-Step Guide

1. Open your Docker Compose file and locate the `develop` key.
2. Inside the `develop` configuration, create a `watch` object to list the paths to sync.
3. Specify your **source path** (e.g., `./backend/src`) and **target path** inside the container (e.g., `/app/src`).
4. Add any folders you wish to ignore using the `ignore` option (e.g., `node_modules`).
5. Save the changes to your Docker Compose file.
6. Open your terminal and run:
   ```bash
   docker-compose up --watch
   ```
7. Modify your code (e.g., add a new line in `server.js`) and save it.
8. Check the Docker logs to see if the changes are reflected.
9. Use a tool like Postman to test the endpoint and verify that your updates are live.

## Conclusion

Congratulations on enabling hot reloading in your Docker Compose project! This feature will save you significant time and effort during development by providing immediate feedback for code changes. Keep practicing and experimenting with Docker Compose to deepen your knowledge. You're on the right track! 🌟
