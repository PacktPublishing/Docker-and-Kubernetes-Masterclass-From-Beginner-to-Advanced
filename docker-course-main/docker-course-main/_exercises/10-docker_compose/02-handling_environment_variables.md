# Setting Up Environment Variables with Docker Compose

## Overview

In this exercise, we’ll focus on efficiently setting up environment variables for our database service in Docker Compose. It’s a great opportunity to practice separating sensitive data from your codebase, which is essential for maintaining security in your applications. Here’s a quick checklist of what we will implement:

1. Define environment variables using the `environment` key in the Compose file.
2. Create a `.env` file to store sensitive information securely.
3. Load multiple `.env` files to manage different sets of credentials.
4. Ensure that the `.env` files are properly ignored from the repository.

Before diving into the step-by-step guide, I encourage you to try implementing these steps on your own! Give it a shot, and then check back for the full instructions.

## Step-by-Step Guide

Here’s how you can set up your environment variables in Docker Compose:

1. **Define Environment Variables Directly**: Open your Docker Compose file and under your service, use the `environment` key to define your variables. For example:

   ```yaml
   environment:
     - MONGODB_INITDB_ROOT_USERNAME=root
     - MONGODB_INITDB_ROOT_PASSWORD=root_password
   ```

2. **Create a `.env` File**: To avoid exposing sensitive credentials, create a file named `.env.db` and add your environment variables there:

   ```plaintext
   MONGODB_INITDB_ROOT_USERNAME=root
   MONGODB_INITDB_ROOT_PASSWORD=root_password
   ```

3. **Load the `.env` File with Docker Compose**: In your Docker Compose configuration, specify the `.env` file:

   ```yaml
   env_file:
     - .env.db
   ```

4. **Organize Credentials**: If managing multiple databases, consider creating separate `.env` files for each:

   - `.env.db-root-creds` for root credentials.
   - `.env.db-key-value` for key-value store credentials.

5. **Verify Ignored Files**: Ensure that your `.env` files are included in your `.gitignore`, so they’re not tracked by version control.

## Conclusion

Today, we explored how to set environment variables in Docker Compose while keeping sensitive information secure. By utilizing `.env` files, we enhance our application's security and maintain cleaner code. Make sure to practice this setup regularly, as it’s a crucial skill for working with Docker and database management! Keep up the great work, and let’s continue our learning journey! 🚀
