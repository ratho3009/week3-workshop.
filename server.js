const express = require('express');  // Imports Express framework
const app = express(); // Create instance of Express application
const http = require('http').Server(app); // Create HTTP server using Express

app.use(express.urlencoded({ extended: true })); // Enable parsing of encoded url data
app.use(express.json()); // enables parsing of JSON data in incoming requests


app.use(express.static(__dirname + '/www')); // Serve files from www, instead of app.get


// Import and register route modules
require('./routes/homeroute.js').route(app);            
require('./routes/loginroute.js').route(app);     

const server = http.listen(3000, function () { // Start server and log to console
  const port = server.address().port;
  console.log("Server running at http://localhost:" + port);
});
