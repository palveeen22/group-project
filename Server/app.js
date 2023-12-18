const express = require("express");
const port = 3000;
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server)(server, {
  cors: {
    origin: "",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded");
  });
  socket.on("callUser", (data) => {
    io.to(data.userToCall).emit("callUser", {
      signal: data.signalData,
      from: data.from,
      name: data.name,
    });
    socket.on("answwerCall", (data) => {
      io.to(data.to).emit("callAccepted"), data.signal;
    });
  });
});

server.listen(port, () => {
  console.log(`слушаем на порт ${port}`);
});
