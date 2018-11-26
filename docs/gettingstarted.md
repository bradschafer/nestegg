---
description: >-
  "Get an entire organization infrastructure up and running in minutes"   <--
  Ok, here's how.
---

# Getting Started

![](.gitbook/assets/gettingstarted-client%20%281%29.png)

Nest Egg is a Docker centric curated platform for modern micro-service based organizations. 

It is a fairly large set of technologies. As such we've tried to make getting started with a working example as simple as possible.

## Prerequisites

* Install Docker \( ver 18.10 or higher\)
* Install Git

## On a Mac/Linux

```text
mkdir nestegg
cd nestegg
git clone https://github.com/bradschafer/nestegg .
bash setup.sh
```

The setup bash script will add some folders and setup the Docker networks that NestEgg needs in order for the containers to talk to each other. The folders will store and 'share' data from your computer to the running Docker services, creating a development environment 'persistence' layer. You can edit files right from your favorite IDE and the web application will refresh on file change automatically. 

### Launch devops infrastructure

```text
cd devops
docker-compose up -d
```

This will launch all main infrastructure containers and prep the host machine for running the development web server. The MongoDB can take up to a minute to start, so wait a moment prior to continuing.

The -d parameter will run these containers detached form the console in the background. You should see something like this:

![](.gitbook/assets/compose-devops.png)

### Launch the development services 

Open a second tab or terminal window so you can see the console logs for the development server.

```text
cd ..
cd develop
docker-compose up
```

You should then see something like this:

![](.gitbook/assets/compose-develop.png)

If you start the development server prior to the MongoDB starting up, you will see an error. It is no big deal, as starting and stopping containers will be a breeze with the '[Portainer](http://portainer.io)' management console which we will cover a bit below.

If you get an error, for now simply press **ctl-c** wait for the containers to shut down, wait a few moments for the MongoDB to completely start then run the 'docker-compose up' command again. 

With all the services started you should now be able to open a browser and goto the front end web application.

```text
http://clientdev.localhost/
```



