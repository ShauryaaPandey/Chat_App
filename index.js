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
    
    socket.on('msg_send', (data) => {
        console.log(data.msg);
        //msg recieved from client
        //now we can send response
        io.emit('msg_rcvd',data);
    });

});

app.use('/', express.static(__dirname + '/public'));

server.listen(3000, () => {
    console.log('Server started running on port 3000');
});