mkdir secrets
mkdir data
mkdir data/devops
mkdir data/devops/elasticsearch
mkdir data/devops/elasticsearch/data 
mkdir data/devops/portainer
mkdir data/devops/ghost
mkdir data/devops/ghost/backupdb
mkdir data/devops/ghost/content
mkdir data/devops/ghost/db
cd devops
docker-compose build
cd .. 
cd develop
docker-compose build
cd ..
docker network create web 
docker network create mongo

