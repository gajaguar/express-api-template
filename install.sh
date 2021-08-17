#!/bin/bash

echo "=> Building image. It can take several minutes..."
echo "   running: docker-compose build -q"
echo ""
docker-compose build -q

echo ""
echo "=> Installing dependencies..."
echo "   running: docker-compose run --rm server yarn"
echo ""
docker-compose run --rm server yarn

echo ""
echo "=> Starting container with a hot reload server"
echo "   running: docker-compose up"
echo ""
echo "NOTE: selecting 'run' compose command instead 'up',"
echo "will can interact with dev server"
echo "e.g. typing 'rs' to restart it manually"
echo "but network will not be available."
echo ""
echo "NOTE: If preferred can add the next alias to '~/.bash_aliases':"
echo "alias yarn='docker-compose run --rm server yarn'"
echo "To substitute the local command for the command in the container"
echo ""
docker-compose up

