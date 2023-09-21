const express = require('express');
const cors = require('cors');

// Initialization of the application
const app =express();
const http = require('http').createServer(app);

const io = require('socket.io')(http , {
    cors: {
        origin: '*'
    }
});

app.get('/', (req, res) => {
    res.send("Server is up...");
})

// Create the server events
io.on('connection',(socket)=>{
    console.log('New connection established...');

    // Join room event
    socket.on('joinRoom', function(data){
      socket.join(data.room);
      console.log(data.user + 'joined the room : ' + data.room);
      socket.broadcast.to(data.room).emit('newUserJoined', {user:data.user, message:'has joined this room.'});
    });
    
    // Message event
    socket.on('message',function(data){
      io.in(data.room).emit('newMessage', {user:data.user, message:data.message});
    });

    // Leave event
    socket.on('leave', function(data){
      console.log(data.user + 'left the room : ' + data.room);
      socket.broadcast.to(data.room).emit('leaveRoom', {user:data.user, message:'has left this room.'});
      socket.leave(data.room);
    });

});

http.listen(3000, () =>{
    console.log("Server is running");
})