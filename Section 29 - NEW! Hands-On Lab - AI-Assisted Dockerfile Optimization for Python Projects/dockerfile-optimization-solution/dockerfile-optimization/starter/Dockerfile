# latest tag is a red flag for production setup
# latest is also pointing to the full blown Python image, maybe (most likely)
# we would be fine with a smaller
FROM python:latest

# Installing unnecessary packages
# No effective cache management (no cleanup after install in the same instruction)
RUN apt-get update && apt-get install -y \
    curl \
    git \
    vim \
    build-essential

WORKDIR /app

# Wrong order, COPY of all files should come after the pip install
# No .dockerignore to prevent unneccessary files from being sent as part of th
# build context
COPY . .

RUN pip install -r requirements.txt

EXPOSE 5000

# Maybe we shouldn't hardcode DEBUG=true and FLASK_ENV=development, this should be
# passed either as runtime environment flags or in a specific development Dockerfile.
ENV FLASK_ENV=development
ENV DEBUG=true

# Hardcoding a secret value is super bad practice
ENV SECRET_KEY=supersecretkey123

CMD ["python", "app.py"]
