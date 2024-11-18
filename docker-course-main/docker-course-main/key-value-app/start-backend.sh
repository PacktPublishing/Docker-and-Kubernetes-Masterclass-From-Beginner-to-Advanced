source .env.db

# Connectivity
source .env.network
LOCALHOST_PORT=3000
CONTAINER_PORT=3000

BACKEND_IMAGE_NAME=key-value-backend
BACKEND_CONTAINER_NAME=backend

MONGODB_HOST=mongodb

if [ "$(docker ps -aq -f name=$BACKEND_CONTAINER_NAME)" ]; then
    echo "A container with the name $BACKEND_CONTAINER_NAME already exists."
    echo "The container will be removed when stopped."
    echo "To stop the container, run: docker kill $BACKEND_CONTAINER_NAME"
    exit 1
fi

docker build -t $BACKEND_IMAGE_NAME \
  -f backend/Dockerfile.dev \
  backend

docker run --rm -d --name $BACKEND_CONTAINER_NAME \
  -e KEY_VALUE_DB=$KEY_VALUE_DB \
  -e KEY_VALUE_USER=$KEY_VALUE_USER \
  -e KEY_VALUE_PASSWORD=$KEY_VALUE_PASSWORD \
  -e MONGODB_HOST=$MONGODB_HOST \
  -e PORT=$CONTAINER_PORT \
  -p $LOCALHOST_PORT:$CONTAINER_PORT \
  -v ./backend/src:/app/src \
  --network $NETWORK_NAME \
  $BACKEND_IMAGE_NAME