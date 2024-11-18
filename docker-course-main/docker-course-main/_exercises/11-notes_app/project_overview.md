# Building a Notes REST API with Multiple Services

Welcome to our project focused on creating a Notes REST API! In this exercise, we’ll be diving into some cool concepts like working with multiple services and containers while ensuring our application’s resilience. 🛠️ Before we jump into the detailed steps, here’s a high-level overview of what you’ll be implementing. I encourage you to attempt this on your own before checking the step-by-step guide below.

## Overview

In this project, you will:

1. **Set Up Your Environment**: Use Docker Compose to create your project structure.
2. **Create the Notebooks Service**:
   - Implement the API for creating, retrieving, updating, and deleting notebooks.
   - Ensure validation for request bodies, including error handling for 400 and 404 responses.
3. **Create the Notes Service**:
   - Develop the API for notes, ensuring the request body contains the necessary fields (title, content) and handle optional notebook IDs.
   - Set up similar endpoints as the Notebooks service.
4. **Implement NGINX Reverse Proxy**: Configure NGINX to act as a single entry point for the APIs.
5. **Manage Service Outages**: Discuss and implement a simple strategy to handle cases when one service is down, ensuring the application can still function.
6. **Test Your API**: Run tests to make sure all endpoints are working as expected.

Take the time to try implementing this before diving into the guide!
