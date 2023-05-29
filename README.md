# Unibook⋅E

This repository contains our exam project **Unibook⋅E** for ITU's course UX & Webprogramming (Spring 2023). 

**Unibook⋅E** is a booking system web application for universities. It allows its users to book and view information regarding available rooms for a given university.


The project is composed of two seperate nodejs projects 'client' and 'server'.

## Server

The server is hosted through the [Express](https://expressjs.com/) web application framework on port 5000.

## Client

The client is the front-end side of the application written in reactjs with the [Chakra-UI](https://chakra-ui.com/) framework. It's hosted on port 3000

## Installation guide

### Prerequisite

It's necessary to first install **nodejs** to run the project.

Then to install the required packages for both the client and server run:
```bash
$ cd unibook-e
$ npm install -y && cd client && npm install -y && cd ../server && npm install -y
```

### How to start the project
 
```bash
$ cd unibook-e
$ npm run start
```

This will start both the server and client concurrently respectively on ports 5000 and 3000.
To affirm it's working navigate to http://localhost:5000 and http://localhost:3000 in your web browser.

### Generating random data

The project includes a script for generating random rooms accessible from the root:

```bash
$ cd unibook-e
$ npm run generate
```

The file will be written to `unibook-e/server/data/rooms.json`.
The repository includes already includes a sample file at that location,
so delete the file first if it already exists to get new random rooms.
