const socket = io();

socket.on('connect', () => {
    console.log('Connected to server');
});

let btn = document.getElementById('btn');
btn.onclick = () => {
    socket.emit('From client');
};

socket.on('message', () => {
     const div = document.createElement('div');
     div.innerText = 'New event from server';
     document.body.appendChild(div);
});