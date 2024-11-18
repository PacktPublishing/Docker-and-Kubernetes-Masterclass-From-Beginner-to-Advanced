# Extending the Color API with Probes

Welcome! In this session, we’ll extend our Color API with some practical endpoints to manage startup, readiness, and liveness probes. This will make it easier for us to control the behavior of these probes using environment variables. Let’s dive into what you’ll aim to implement! 🙌

## Overview

In this exercise, you will enhance the Color API by adding functionality for startup, liveness, and readiness probes. Below are the main steps you'll want to follow. Before checking the step-by-step guide, give it a shot on your own:

1. **Create Environment Variables**: Set up environment variables that control the behavior of the startup, liveness, and readiness probes.
2. **Implement Delays**: Introduce logic to delay the startup of the application based on the environment variable.
3. **Add Endpoints**: Create `/ready` and `/health` endpoints to respond to readiness and liveness probes.
4. **Use Randomness for Readiness**: Implement logic in the readiness endpoint to randomly fail half of the time.
5. **Test Your Implementation**: Ensure that your application handles different scenarios based on the variables you set.

Before moving on, take a moment to implement these steps on your own. It's a great way to learn!

## Step-by-Step Guide

1. **Set Environment Variables**:
   - Create variables like `fail_startup`, `fail_liveness`, and `fail_readiness` in your environment configuration.
2. **Update Logic for Probes**:

   - In your Color API, modify the logic to check these environment variables when determining probe results.
   - For `fail_startup`, introduce a startup delay if the variable is set to true.
   - For `fail_liveness` and `fail_readiness`, return appropriate HTTP responses based on the variable values.

3. **Create New Endpoints**:

   - Add a `/ready` endpoint that checks the `fail_readiness` variable and responds with a 503 status if it's set to true.
   - Add a `/health` endpoint using similar logic for the `fail_liveness` variable.

4. **Implement Randomness**:

   - Use `Math.random()` to create a 50% chance of failing the readiness probe when `fail_readiness` is true.

5. **Build and Push Your Container**:
   - Build your updated Docker container using a command like `docker build -t yourusername/color-api:v1.2.0 .`
   - Push the new version with `docker push yourusername/color-api:v1.2.0`.

## Conclusion

Great job! By adding these new endpoints and enhancing the Color API with probe management, you’ve taken an important step in understanding how to control application behavior in Kubernetes. Keep exploring, experimenting, and practicing these concepts—there’s always more to discover!
