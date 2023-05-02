const express = require('express'); // import express
const write_rooms_to_file = require('./data/generate_data');
const path = require('path');
const port = 5000;
const app = express(); // initialize app

/** Not a good idea to generate data like this for a live project */
app.get('/generate_data',(req,res) => { 
  try {
    const json = write_rooms_to_file(path.join(__dirname,'data','rooms.json'));
    res.send(`[+] Data generated succesfully!\n${json}`);
  } catch (error) {
    res.send(`[-] Failed data generation: \n${error}`);
  }
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Serve the static files from the client/build directory when a request is made to 
// the server and the URL doesn't match any of the defined routes.
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(port,() => {
  console.log(`[+] Server started on port ${port}`)
});
