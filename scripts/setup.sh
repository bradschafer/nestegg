# move up to the project root then add folders
cd .. 
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
# now do the initial build to pull images for devops
cd devops
docker-compose build
cd ..
# now do the initial build to pull images for devops
cd develop
docker-compose build
cd ..
docker network create web 
docker network create mongo

