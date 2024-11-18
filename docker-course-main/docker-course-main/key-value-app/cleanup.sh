# 1. Stop and remove mongodb containers
# 2. Stop and remove app containers
# 3. Remove volumes
# 4. Remove networks

source .env.db
source .env.volume
source .env.network

if [ "$(docker ps -aq -f name=$DB_CONTAINER_NAME)" ]; then
    echo "Removing DB container $DB_CONTAINER_NAME"
    docker kill $DB_CONTAINER_NAME # && docker rm $DB_CONTAINER_NAME - Add if not running with --rm
else
    echo "A container with the name $DB_CONTAINER_NAME does not exist. Skipping container deletion."
fi

if [ "$(docker volume ls -q -f name=$VOLUME_NAME)" ]; then
    echo "Removing volume $VOLUME_NAME"
    docker volume rm $VOLUME_NAME
else
    echo "A volume with the name $VOLUME_NAME does not exist. Skipping volume deletion."
fi

if [ "$(docker network ls -q -f name=$NETWORK_NAME)" ]; then
    echo "Removing network $NETWORK_NAME"
    docker network rm $NETWORK_NAME
else
    echo "A network with the name $NETWORK_NAME does not exist. Skipping network deletion."
fi