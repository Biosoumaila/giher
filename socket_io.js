
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);



app.get('/', (req, res) => {
    res.sendFile('index.html');
});

server.listen(3000, () => {
    console.log('listen on *: 3000');
});