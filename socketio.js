import io from'socket.io';


function initSocket(server) {
  const io = socketIO(server);

  io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('joinRoom', (room) => {
      socket.join(room);
    });

    socket.on('sendMessage', (message, room) => {
      io.to(room).emit('message', message);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  return io;
}

module.exports = initSocket;