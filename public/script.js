const socket = io();

socket.on('connect', () => {
    console.log('Connected to server');
});

let btn = document.getElementById('btn');
let inptmsg = document.getElementById('newmsg');
let msglist = document.getElementById('msglist');

btn.onclick = function exec(){
    socket.emit('msg_send', {
        msg: inptmsg.value
    });
    inptmsg.value = '';
}

socket.on('msg_rcvd', (data) => {
     const li = document.createElement('li');
     li.innerText = data.msg;
     msglist.appendChild(li);
});