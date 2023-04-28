const express = require('express'); // import express
const path = require('path');
const port = 5000;
const app = express(); // initialize app

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
