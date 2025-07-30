const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');

// For POST-data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/www'));


// user data
const users = [
  { email: 'frameworks@griffith.com', password: '123' },
  { email: 'rasmus@griffith.com', password: '456' },
  { email: 'software@c.com', password: '789' }
];


app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const valid = users.some(user => user.email === email && user.password === password);
  res.json({ valid });
});

// starts server at port 3000 and logs it
const server = http.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Server running at http://" + host + ":" + port);
});
