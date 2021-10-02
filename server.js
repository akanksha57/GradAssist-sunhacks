const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Run when a client connects
io.on('connection', socket => {
    console.log('New websocket connection');

    socket.emit('message', 'Welcome to GradAssist');

    //Brodcast when a user connects
    socket.brodcast.emit();
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT} `));
