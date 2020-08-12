const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const {addUser, removeUser, getUser, getUsersInRoom} = require('./users')

const PORT = 5000

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    socket.on('join', ({name, room},callback) => {
        const {error, user} = addUser({id: socket.id, name, room});
        if(error) return callback(error);

        socket.emit('message', {user: 'chatbot', text: `${user.name}, welcome to the room ${user.room}` });
        socket.broadcast.to(user.room).emit('message', {user: 'chatbot', text: `${user.name}, has joined!`})

        socket.join(user.room);
        callback();
    })
    
    socket.on('sendMessage', (message) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('message', {user: user.name, text: message});
    })

    socket.on('disconnect', () => {
        console.log('user has left');
    })
});

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));




// // ------------------------------------------ shortened
// const app = require('express')()
// const http = require('http').createServer(app);
// const io = require('socket.io')(http)


// io.on('connection',socket => {
//     socket.on('message',({name,message}) => {
//         io.emit('message',{name, message})
//     })
// })

// http.listen(4000,function(){
//     console.log('listening on port 4000')
// })