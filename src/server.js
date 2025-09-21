import express from "express";
import http from "http";
import { Server } from "socket.io";
import { Route_V1 } from "./routes/v1/index.js";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const hostname = "localhost";
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello Binh with socket.io");
});

app.use('/', express.json())

app.use('/v1', Route_V1)

io.on("connection", (socket) => {
  console.log("✅ A user connected:", socket.id);

  // Lắng nghe tin nhắn từ client
  socket.on("chatMessage", (msg) => {
    console.log("💬 Message from client:", msg);

    // Gửi lại cho client
    socket.emit("chatMessage", `Server nhận: ${msg}`);
  });

  socket.on("disconnect", () => {
    console.log("❌ A user disconnected:", socket.id);
  });
});

// app.listen(port, hostname, () => {
//   console.log(`server is running at http://${hostname}:${port}`);
// });

server.listen(5000, () => {
  console.log(`server is running at http://${hostname}:${port}`);
})