---
description: >-
  Assuming all went well with the getting started step, a lot of stuff just
  scrolled by and you're probably wondering what all just happened. Let's
  introduce you to some new friends.
---

# What Just Happened?

At this point we can begin to use some of the running services to do administration. Here are the main URL's you will be using:

## DevOps Services

![](.gitbook/assets/gettingstarted-marketleaders.png)

### Portainer

[http://portainer.localhost/](http://portainer.localhost/)

### Traefik

[http://proxy.localhost/dashboard/](http://proxy.localhost/dashboard/)

### Rabbit MQ

[http://rabbitmq.localhost/\#/](http://rabbitmq.localhost/#/)

### Kibana

[http://kibana.localhost](http://kibana.localhost)

### Elastic Search

[http://elasticsearch.localhost/](http://elasticsearch.localhost/)

## Development Services

### Web Application

[http://clientdev.localhost/](http://clientdev.localhost/)

### API Documentation

[http://api.localhost/api/docs/\#/api](http://api.localhost/api/docs/#/api)

Sometimes the development URL's don't get picked up by Traefik \( the routing engine\). To remedy this we can simply 'restart' the Traefik container. To do so, you will need to use the 'restart' button in Portainer for the Traefik container.

So create an administration account in portainer and recycle it now.

![](.gitbook/assets/gettingstarted-portainer-1.png)

![](.gitbook/assets/gettingstarted-portainer-2.png)

![](.gitbook/assets/gettingstarted-portainer-3.png)

Once Traefik is restarted, all the services should get found and get simple localhost domain names.

Open a browser and navigate to [http://proxy.localhost/dashboard/](http://proxy.localhost/dashboard/)

You should see something like this:

![](.gitbook/assets/gettingstarted-traefik.png)



