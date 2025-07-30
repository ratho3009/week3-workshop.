const express = require('express');
const app = express();
const http = require('http').Server(app);
app.get('/test', function (req, res) {
    res.sendFile(__dirname + '/www/test.html');
    });

app.use(express.static(__dirname + '/www'));

const server = http.listen(3000, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log("Server listening on: " + host + " port: " + port);
});
