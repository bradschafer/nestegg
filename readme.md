<img src="docs/images/GettingStarted-Client.png">

# Nest Egg Intro
<img src="docs/images/GettingStarted-MarketLeaders.png">
Nest Egg is a a Docker centric curated platform for modern micro-service based organizations. It is a fairly large set of technologies. As such we've tried to make getting started with a working example as simple as possible. 


# Getting Started
## Prerequisites
    - Install Docker ( ver 18.10 or higher)
    - Intall Git
    
## On a Mac or Linux machine
```console
git clone https://github.com/bradschafer/nestegg ./nestegg
cd nestegg
setup.sh
```
The setup bash script will add some folders and setup the Docker networks that NestEgg needs in order for the containers to talk to each other.

```console
cd devops
docker-compose up -d
```
This will launch all main infrastructure containers and prep the host machine for running the development web server. The MongoDB can take up to a minute to start, so wait a moment prior to continuing.

The -d parameter will run these containers detached form the console in the background. You should see something like this:

<img src="docs/images/Compose-DevOps.png">

Open a second tab or terminal window so you can see the console logs for the development server.

```console
cd ..
cd develop
docker-compose up
```

You should then see something like this:

<img src="docs/images/Compose-Develop.png">

If you start the development server prior to the MongoDB starting up, you will see an error. It is no big deal, as starting and stopping containers will be a breeze with the 'Portainer' management console which we will cover a bit below.

If you get an error, for now simply press * ctl-c * wait for the containers to shut down then run the docker-compose command again.

At this point we can begin to use some of the running services to do administration. Here are the main URL's you will be using:

## DevOps Services

### Portainer
http://portainer.localhost/

### Traefik
http://proxy.localhost/dashboard/

### Rabbit MQ
http://rabbitmq.localhost/#/

### Kibana
http://kibana.localhost

### Elastic Search
http://elasticsearch.localhost/


## Development Services

### Web Application
http://clientdev.localhost/

### API Documentation
http://api.localhost/api/docs/#/api


Sometimes the development URL's don't get picked up by Traefik ( the routing engine). To remedy this we can simply 'restart' the Traefik container. To do so, you will need to use the 'restart' button in Portainer for the Traefik container. 

So create an administration account in portainer and recycle it now.

<p><p>
<p><p>
<img src="docs/images/GettingStarted-Portainer-1.png">
<p><p>
<p><p>
<img src="docs/images/GettingStarted-Portainer-2.png">
<p><p>
<p><p>
<img src="docs/images/GettingStarted-Portainer-3.png">

Once Traefik is restarted, all the services should get found and get simple localhost domain names.

Open a browser and navigate to http://proxy.localhost/dashboard/

You should see something like this:
<p><p>
<p><p>
<img src="docs/images/GettingStarted-Traefik.png">


With all the services started you should now be able to open a browser and goto the front end web application.


<img src="docs/images/GettingStarted-Client.png">
