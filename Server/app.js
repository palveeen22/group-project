const express = require("express");
const port = 3000;
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

server.listen(port, () => {
  console.log(`слушаем на порт ${port}`);
});
