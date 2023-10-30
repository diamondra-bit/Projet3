const { Server } = require("socket.io");
const io = new Server({
  cors: {
    origin: "http://localhost:3000"
  }
});

const connectedUsers = new Set(); // Utilisez un ensemble pour stocker les utilisateurs connectés

io.on('connection', (socket) => {
  if (!connectedUsers.has(socket.id)) {
    console.log('Un utilisateur s\'est connecté.');
    connectedUsers.add(socket.id);
  }

  socket.on('notification', (data) => {
    io.emit('notification', data);
  });

  socket.on('disconnect', () => {
    connectedUsers.delete(socket.id);
  });
});

io.listen(5000);
