# Updating the Color API to Use Environment Variables

## Overview

In this exercise, we’ll enhance our Color API application to allow passing colors through environment variables or a configuration file. Before diving into the details, take a moment to try and implement the following steps on your own:

1. Update the application code to include the `fs` and `path` packages.
2. Create a function called `getColor` that retrieves the default color from environment variables.
3. Implement logic to optionally read a color configuration file if a path is provided.
4. Adjust the function to handle errors gracefully and return a default color if necessary.
5. Build and push the updated version of the Color API.

Challenge yourself to implement these changes before checking the step-by-step guide below! 💪

## Step-by-Step Guide

Follow these steps to successfully update your Color API:

1. **Import Required Packages**:
   Begin by requiring the `fs` (file system) and `path` packages at the start of your file.

   ```javascript
   const fs = require('fs');
   const path = require('path');
   ```

2. **Create the `getColor` Function**:
   Define an arrow function named `getColor` to handle the logic of retrieving the color value from environment variables.

   ```javascript
   const getColor = () => {
     let color = process.env.DEFAULT_COLOR;
     const filePath = process.env.COLOR_CONFIG_PATH;

     // Logic to read file or return default color
   };
   ```

3. **Read from Configuration File**:
   Within the `getColor` function, add logic to read from the specified file path if it exists.

   ```javascript
   try {
     const colorFromFile = fs
       .readFileSync(path.resolve(filePath), 'utf8')
       .trim();
     color = colorFromFile; // Override with file content
   } catch (error) {
     console.error(`Failed to read contents from ${filePath}:`, error);
   }
   ```

4. **Return a Default Color**:
   If no color is retrieved from either environment variables or the file, fallback to a default color value (e.g., "blue").

   ```javascript
   if (!color) {
     color = 'blue';
   }
   return color;
   ```

5. **Build and Version Your API**:
   Update your API version from `1.2.1` to `1.3.0` to signify the new functionality and build the application.

   ```bash
   # In terminal
   docker build -t color_api:1.3.0 .
   ```

6. **Push the Changes**:
   Push the newly tagged version to your Docker repository:
   ```bash
   docker push your_username/color_api:1.3.0
   ```

## Conclusion

You’ve successfully extended the functionality of the Color API to support environment variables and configuration files for color settings! This practice not only reinforces your coding skills but also enhances your understanding of handling configurations in applications. Keep experimenting and learning; there’s always more to explore in the world of Kubernetes and application development! 🌟
