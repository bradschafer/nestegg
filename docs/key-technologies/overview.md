# Overview

## Containers

The de-facto technology of the modern infrastructure. "Manage cattle not pets" is the motto that clearly represents the ethereal nature of continuously bringing up, deploying and bringing down automated, immutable images of needed services.  
  
**Core Technology :** [**Docker**](https://www.docker.com/)  
**Learn it:**  [**Udemy - Docker Mastery**](https://www.udemy.com/docker-mastery/)  
**Use It:**  [**Getting Started**](../gettingstarted.md)\*\*\*\*

## Persistence

Persistence of data is the lifeblood of the modern business -- as a by product it's also how the data is stored, retrieved, re-shaped, and made 'available' in world where the services accessing 'data' change on a moments notice and scale up, down and sideways \( around the world \) continually.  
  
**Core Technology :** **RexRay**, **S3**, **CDN'**s  
**Learn it:**    
**Use It:**  [**Getting Started**](../gettingstarted.md)\*\*\*\*

## Search

Querying data is as important as the ability to store and retrieve it. That is why search technologies are a key technology across the business spectrum. More recently visualization of searches have become the baseline need of knowledge workers throughout the organization. One family of search technologies stands out as a clear leader. Affectionately known as the ELK Stack it fulfills its role in the search space. No modern organization would be complete without a NoSQL database as well, MongoDb is the clear choice here.   
  
**Core Technology :** [**MongoDb**](http://mongodb.com) \| **ELK Stack** [**\( Elastic Search, Logstash & Kibana\)** ](https://www.elastic.co/)  
**Learn it:**    
**Use It:**  [**Getting Started**](../gettingstarted.md) 

## Messaging

Nearly every higher living organism has a nervous system. That system sends needed information all over the organism. Modern message queue servers provide much the same benefit while also adding to robustness, scale, and perhaps most important de-coupled business processes that can grow and change  though message subscriptions and publishing.  
  
**Core Technology :** [**RabbitMQ**](http://www.rabbitmq.com/)  
**Learn it:**  [**Tutorials**](http://www.rabbitmq.com/getstarted.html)  
**Use It:**  [**Getting Started**](../gettingstarted.md) 

## Microservices

Small simple services that are easily managed, contain their own persistence and scale up and down easily. The counterpart to a monolithic solution. The definition of microservices vary widely, but the generally accepted guidelines are about the same. At the core of NestEgg is NestJS, a framework for building microservices that combines elements of OOP \(Object Oriented Programming\), FP \(Functional Programming\), and FRP \(Functional Reactive Programming\) using Typescript \(preserving compatibility with pure JavaScript while introducing stronger types\).

**Core Technology :** [**NestJS**](https://docs.nestjs.com/)  
**Learn it:**  [**Tutorials**](https://docs.nestjs.com/)  
**Use It:**  [**Getting Started**](../gettingstarted.md) 

## Service Discovery

The nature of containerized microservices in an organization has organically led to a new mission critical pair of technologies; SD \(Service Discovery\) and OM \(Orchestration Management\). Service discovery aids in the detection and management of services as the flow of service availability changes over time. NestEgg uses a combination of  SD and OM technologies to manage the flow of services in the organization.

**Core Technology :** [**Traefik**](https://traefik.io/) **/** [**Docker**](http://www.docker.com)   
**Learn it:**  [**Tutorials**](https://docs.traefik.io/)  
**Use It:**  [**Getting Started**](../gettingstarted.md) 

## Continuous Delivery

## Orchestration Management

Closely tied to SD \( Service Discovery \) is OM \( Orchestration Management \). At it core OM sets the rules for how services are deployed, scaled, load-balanced and secured. Two technologies have defined and the standard for OM: Kubernetes and Docker.  NestEgg believes at times less is more. As such Docker Swarm is the default OM technology used in the NestEgg solution. Docker Swarm integrates well with some of the other technologies mentioned below making it the easy choice for most organizations OM needs.

**Core Technology :**  [**Docker Swarm**](http://www.docker.com)  
**Learn it:**  [**Tutorials**](https://www.udemy.com/docker-swarm-mastery/)  
**Use It:**  [**Getting Started**](../gettingstarted.md) 

## Monitoring & Alerts

## Web Applications

