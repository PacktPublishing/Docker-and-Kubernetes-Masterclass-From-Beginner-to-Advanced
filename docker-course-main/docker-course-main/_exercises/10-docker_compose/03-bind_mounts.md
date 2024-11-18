# Working with Bind Mounts in Docker

Welcome to this guide on using bind mounts in Docker! In this session, we'll delve into how to create and use a script to initialize a key-value database with the required user roles. Before we get started, I encourage you to take a shot at implementing the solution on your own. Ready for the challenge? Here’s a quick overview of the steps you’ll need to follow:

## Overview

1. Create a new folder named `B-config`.
2. Write a script named `Mongo-init.js` to initialize your key-value database and set user roles.
3. Add a bind mount volume in your `compose.yaml` file to connect the script from your host to the container.
4. Confirm that the script runs successfully and initializes the database as expected.
5. Make any necessary adjustments and rerun your Docker containers to ensure everything is functioning properly.

Give these steps a try before checking out the detailed guide below! 🌟

## Step-by-Step Guide

1. **Set Up the Script**:

   - Create a folder called `B-config` in your project directory.
   - Inside this folder, create a file named `Mongo-init.js`.
   - In your `Mongo-init.js`, use the following code snippet to set up your database:

     ```javascript
     process.m.key_value_db = {
       username: 'user',
       password: 'password',
     };

     const db = getSiblingDb('key_value_db');
     db.createUser({
       user: 'key_value_user',
       pwd: 'key_value_password',
       roles: [{ role: 'readWrite', db: 'key_value_db' }],
     });
     ```

2. **Update the Docker Compose Configuration**:

   - Open your `compose.yaml` file.
   - Add a new volume to bind mount the `Mongo-init.js` script. You can do this in two ways, either the shorthand or the more explicit method:
     **Shorthand Syntax**:
     ```yaml
     volumes:
       - ./B-config/mongo-init.js:/docker-entrypoint-initdb.d/mongo-init.js:ro
     ```
     **Explicit Syntax**:
     ```yaml
     volumes:
       mongo-init:
         type: bind
         source: ./B-config/mongo-init.js
         target: /docker-entrypoint-initdb.d/mongo-init.js
         read_only: true
     ```

3. **Run Your Docker Compose**:

   - Open your terminal and run the command:
     ```bash
     docker-compose up
     ```
   - Check the logs to see if your initialization script executed successfully.

4. **Verify Database Initialization**:

   - You can confirm the script’s execution by running:
     ```bash
     docker-compose ps -a
     ```
   - You should see an initialization message in your logs.

5. **Test Database Access**:
   - Run a command to connect to your database and check if the collections have been set up correctly. Use the credentials defined in your script to ensure you can authenticate.

## Conclusion

Great job on working through this process of setting up bind mounts in Docker! You've implemented a script to initialize a key-value database, which is a crucial step in database management. As we continue exploring Docker, remember that practice is key. Keep experimenting and playing around with these concepts, and you'll solidify your understanding in no time!
