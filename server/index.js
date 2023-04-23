const express = require('express'); // import express
const port = 5000;
const app = express(); // initialize app

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port,() => {
  console.log(`[+] Server started on port ${port}`)
});
