# Vagrant web load balancer demo
This project is a simple example of how to build a NodeJS web app and run a
HAProxy Load Balancer in front of the web app, using docker containers. 
This is managed by a multi-machine Vagrantfile that uses the Vagrant docker
provider for setting up the containers.

## Installation
 - Install vagrant: http://vagrantup.com/downloads.html
 - Install docker: https://docs.docker.com/install

## Quick Start
Clone this repo: `git clone https://github.com/dglynn/demo-lb-web.git`
```sh
vagrant up --no-parallel
```
The need to use the `--no-parallel` flag is because the lb container is linked
to the web container: https://www.vagrantup.com/docs/docker/configuration.html#link

## How it Works
Once the installation finishes, you can  browse to `localhost` from your web
browser. The HAProxy is listening on `port 80` and it will forward your request
to the web app running on `port 8080` on `localhost`. 

The web app is using NodeJS, ExpressJS and EJS for templating the NodeJS app.

PR's and issues welcome.
