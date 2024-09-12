#! /bin/bash

IMAGE_NAME="moderation-bot"

cd "$(dirname "$0")/../.." || exit

npm run build

if docker image inspect $IMAGE_NAME:latest > /dev/null 2>&1; then
    CONTAINERS=$(docker ps -a -q --filter ancestor=$IMAGE_NAME:latest)

    if [ ! -z "$CONTAINERS" ]; then
        docker stop $CONTAINERS
        docker rm $CONTAINERS
    fi

    docker rmi $IMAGE_NAME:latest
fi

docker build -t $IMAGE_NAME .