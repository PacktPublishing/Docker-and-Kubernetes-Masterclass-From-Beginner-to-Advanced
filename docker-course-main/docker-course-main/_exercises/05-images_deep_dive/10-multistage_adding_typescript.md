# Integrating TypeScript into Our Docker Workflow

Welcome! In this guide, we’ll dive into integrating TypeScript into our Docker project using multi-stage builds. This will be a hands-on exercise, so get ready to roll up your sleeves! Before you check out the step-by-step instructions, I encourage you to give it a shot yourself. Here’s a quick overview of what you should aim to accomplish:

## Overview

### What You'll Do:

1. **Install TypeScript** as a development dependency in your project.
2. **Initialize the TypeScript project** to create the necessary configuration file.
3. **Rename your main JavaScript file** from `index.js` to `index.ts` and adjust the import statements accordingly.
4. **Add a build script** in the `package.json` to compile TypeScript files into JavaScript.
5. **Set up the output directory** for compiled files in your TypeScript configuration.
6. **Run your application** to ensure everything works smoothly after the changes.

Try to implement these steps before moving on to the detailed guide. Let's see what you can do! 🚀

## Step-by-Step Guide

1. **Install TypeScript:**
   Open your terminal and run the following commands to add TypeScript as a development dependency:

   ```bash
   npm install --save-dev typescript@5.5.3 @types/express@4.17.21
   ```

2. **Initialize TypeScript:**
   Initialize your TypeScript project by running:

   ```bash
   npx tsc --init
   ```

3. **Rename the Main File:**
   Change `index.js` to `index.ts`. This will let TypeScript know that this file is meant for TypeScript rather than JavaScript.

4. **Update Import Statements:**
   Change the `require` statement to the `import` syntax in `index.ts`:

   ```javascript
   import express from 'express';
   ```

5. **Modify the TypeScript Configuration:**
   Open the `tsconfig.json` file and uncomment the `outDir` option, setting it to `dist`:

   ```json
   "outDir": "./dist"
   ```

6. **Add a Build Script:**
   In your `package.json`, add a new script for building the TypeScript project:

   ```json
   "scripts": {
       "build": "tsc"
   }
   ```

7. **Build and Run:**
   Execute the build command in your terminal:

   ```bash
   npm run build
   ```

   Now run your application using the compiled JavaScript:

   ```bash
   PORT=3000 node dist/index.js
   ```

   Check that your application responds with "hello from express" when accessed.

## Conclusion

In this exercise, we learned how to integrate TypeScript into our Docker project with multi-stage builds. You successfully installed TypeScript, updated your project configuration, and ensured that your application runs as expected. Keep practicing and exploring TypeScript, as it adds a lot of value to your development process. Happy coding! 🌟
