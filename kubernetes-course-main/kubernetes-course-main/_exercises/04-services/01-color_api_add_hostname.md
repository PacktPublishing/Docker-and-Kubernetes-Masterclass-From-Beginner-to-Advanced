# Enhancing the Caller API with Hostname and Formatting Options

Welcome! In today's exercise, we're diving into making some notable enhancements to our Caller API. We're excited to implement new features that will not only make our API more informative but also provide flexible response formats. 🚀

## Overview

In this session, you’ll be adding additional functionality to the Caller API. The aim is to make it return the hostname of the machine running the application and allow users to choose between JSON and plain text formats for the API response. Here’s a quick summary of the main steps you’ll need to tackle:

1. Create a new route for the `/api` endpoint.
2. Implement JSON response to include both the color and the hostname.
3. Add the OS module to fetch the hostname.
4. Introduce query parameters to allow users to specify the desired response format (JSON or plain text).
5. Test the API using Docker after building a new image.

Before you dive into the step-by-step guide, give your best shot at implementing the solution yourself! You'll learn much more by trying it firsthand.

## Step-by-Step Guide

Let's get started with the enhancements:

1. **Create the API Endpoint**: Set up a new endpoint that listens for requests on `/api`.

2. **Define the Response**: Use `response.json()` to send back a JSON response that includes:

   - A hardcoded value for color (e.g., "blue").
   - The hostname fetched with the `OS` module.

3. **Import the OS Module**:

   - Use Node's built-in `os` module to retrieve the current hostname.
   - Add this information to the JSON response.

4. **Format Options**:

   - Implement logic to check query parameters, enabling users to specify if they want the response in JSON or plain text.
   - Based on the user’s input, return the appropriate format.

5. **Docker Container**:
   - Build your Docker image with appropriate tagging.
   - Run your container and test the API with `curl` commands to ensure everything is functioning correctly.

## Conclusion

Great job on enhancing the Caller API! You've successfully added the functionality to retrieve the hostname and offered users options for response formats. This hands-on experience solidifies your understanding of developing and deploying APIs. Keep experimenting and practicing, as there's always more to discover in the world of APIs!
