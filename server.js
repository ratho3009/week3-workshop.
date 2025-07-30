const express = require('express'); // Imports Express framework
const app = express(); // Create instance of Express application
const http = require('http').Server(app); // Create HTTP server using Express


app.use(express.urlencoded({ extended: true })); // Enable parsing of encoded url data
app.use(express.json()); // enables parsing of JSON data in incoming requests

app.use(express.static(__dirname + '/www')); // Serve files from www

require('./routes/homeroute.js').route(app); // Import routes


const users = [ // hardcoded list of users with email and password for login
  { email: 'frameworks@griffith.com', password: '123' },
  { email: 'rasmus@griffith.com', password: '456' },
  { email: 'software@c.com', password: '789' }
];

app.post('/login', (req, res) => { // Handle POST requests to login
    const { email, password } = req.body;
  
    const match = users.find(user => user.email === email && user.password === password);
  
    if (match) {
      res.json({ valid: true }); // Login successful
    } else {
      res.json({ valid: false }); // Login failed
    }
  });
  
const server = http.listen(3000, function () { // Starts server on port 3000 and logs address and port
  const host = server.address().address;
  const port = server.address().port;
  console.log("Server running at http://" + host + ":" + port);
});
