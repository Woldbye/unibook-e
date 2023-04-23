# Unibook⋅E

This repository contains our exam project **Unibook⋅E** for ITU's course UX & Webprogramming (Spring 2023). 

**Unibook⋅E** is a booking system web-application for universities. It allows it's users to book and view information regarding available rooms for the given university. 


The project is composed of two seperate nodejs projects 'client' and 'server'.

## Server

The server is hosted through the [Express](https://expressjs.com/) web-application framework on port 5000.

## Client

The client is the front-end side of the application written in reactjs with the Chakra-UI framework. It's hosted on port 3000

## How to run

It's necessary to first install nodejs to run the project. Assuming nodejs is installed the project can be run by simply:
```bash
$ cd unibook-e
$ npm run
```
This will start both the server and client concurrently respectively on port 5000 and 3000.
To affirm it's working navitage to http://localhost:5000 and http://localhost:3000 in your web-browser.
