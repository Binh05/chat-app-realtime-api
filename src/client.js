import { io } from "socket.io-client";

// Kết nối tới server
const socket = io("http://localhost:5000");

// Khi kết nối thành công
socket.on("connect", () => {
    console.log("✅ Connected to server, id:", socket.id);

    // Gửi thử 1 message sau khi connect
    socket.emit("chatMessage", "Hello from client!");
});

// Nhận message từ server
socket.on("chatMessage", (msg) => {
    console.log("💬 Server says:", msg);
});

// Xử lý disconnect
socket.on("disconnect", () => {
    console.log("❌ Disconnected from server");
});
