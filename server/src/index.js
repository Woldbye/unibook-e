const express = require('express'); // import express
const port = 5000;
const app = express(); // initialize app
const roomdb = require('./database/db.js'); // import the room database
const path = require('path');
const roomQuery = require('../../shared/roomquery.js');

roomdb.load_rooms(); // load the rooms from the json file into the database

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/** Room query */
app.get('/rooms?*',(req,res) => {
  console.log("Request: ", req);
  const query = roomQuery.fromUrl(req.url);
  const rooms = roomdb.query(query);
  res.send(rooms);
});

app.get('/book?id=*',(req,res) => {
  console.log("Request: ", req);
  const query = roomQuery.fromUrl(req.url);
  const rooms = roomdb.query(query);
  res.send(rooms);
});

app.listen(port,() => {
  console.log(`[+] Server started on port ${port}`)
});
