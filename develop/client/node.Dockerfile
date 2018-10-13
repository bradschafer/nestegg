# if you're doing anything beyond your local machine, please pin this to a specific version at https://hub.docker.com/_/node/
FROM node:10-alpine as development

RUN apk update && apk add bash

RUN mkdir -p /opt/app

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# default to port 4200 for web, 9876 (test), 49153 (livereload) for debug
ARG PORT=4200
ENV PORT $PORT
EXPOSE $PORT 9229 9876 49153

# you'll likely want the latest npm, regardless of node version, for speed and fixes
# RUN npm i npm@latest -g 

# for development only install the angular cli globally
RUN npm i -g @angular/cli

# RUN npm i -g typescript

# this allows us to watch app and tests and more at the same time
RUN npm i -g concurrently


# install dependencies first, in a different location for easier app bind mounting for local development
WORKDIR /opt
COPY package.json package-lock.json* proxy.conf.json* ./
RUN npm install && npm cache clean --force
ENV PATH /opt/node_modules/.bin:$PATH

# show npm known vulnerabilities
# RUN npm audit

# allow npm to fix vulnerabilities
# RUN npm audit fix

# check every 30s to ensure this service returns HTTP 200
# HEALTHCHECK --interval=30s CMD node healthcheck.js

# copy in our source code last, as it changes the most
WORKDIR /opt/app
COPY . /opt/app

# We install bash on alpine and run an init shell script so that we get all the ENV vars.
CMD ["bash", "init.sh"]