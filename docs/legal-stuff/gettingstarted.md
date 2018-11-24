# Random Info / Links

## Karma URL

## [http://localhost:9876/](http://localhost:9876/)

## Remove all Docker stuff - helper

Warning: This will destroy all your images and containers. It will not be possible to restore them!

Run those commands in a shell:

## !/bin/bash

## Delete all containers

docker rm $\(docker ps -a -q\)

## Delete all images

docker rmi $\(docker images -q\)

