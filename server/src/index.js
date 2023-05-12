const cors = require('cors');
const express = require('express'); // import express
const port = 5000;
const app = express(); // initialize app
const roomdb = require('./database/db.js'); // import the room database
const path = require('path');
const roomQuery = require('../../shared/roomquery.js');
roomdb.load_rooms(); // load the rooms from the json file into the database

app.use(cors());

app.get('/',(req,res) => {
  res.send('Hello World!')
})

/** Room query */
app.get('/rooms?*',(req,res) => {
  // console.log("Request: ", req);
  const query = roomQuery.fromUrl(req.url);
  console.log("Query: ", query)
  const rooms = roomdb.query(query);
  res.send(rooms);
});

/** Request to book room with the given id */
app.get('/book/id?*',(req,res) => {
  console.log("Request: ", req);
  const id = req.url.split('id?')[1]; // id is the string after 'id?'
  if(roomdb.book(query)) {
    res.send("Booked room with id: " + id);
  } else {
    res.send("Failed to book room with id: " + id);
  }
});

app.listen(port,() => {
  console.log(`[+] Server started on port ${port}`)
});
