const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();

//creating a basic http server and connecting it to app object
const server = http.createServer(app);
//creating a socket object
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('A user connected' , socket.id);
    
    socket.on('From client', () => {
        console.log('Message From client');
    });

    setInterval(() => {
        socket.emit('message', 'Hello from server');
    }, 2000);
});

app.use('/', express.static(__dirname + '/public'));

server.listen(3000, () => {
    console.log('Server started running on port 3000');
});