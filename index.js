const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const staticRouter = require('./routes/staticRouter');
const roomRouter = require('./routes/rooms');

// Defining global variables
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Middlewares
app.use(express.urlencoded({ extended: false }));

// Handling Routes
app.use('/', staticRouter);
app.use('/rooms', roomRouter);

// Socket I/O
io.on('connection', (socket) => {
  socket.on('join-room', (roomID) => {
    socket.join(roomID);
  });

  socket.on('room-message', (roomID, message) => {
    socket.broadcast.to(roomID).emit('message', message);
  });
});

// Start Server
server.listen(8080, () => {
  console.log('Server running on http://127.0.0.1:8080/');
});
