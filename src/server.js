import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "*",
    },
})

const hostname = 'localhost'
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello Binh with socket.io')
})

io.on("connection", socket => {
    console.log("a user connected: " + socket.id)

    socket.on("disconnected", () => {
        console.log("user disconnected: " + socket.id)
    })

    socket.on("send_message", (data) => {
        console.log("message: ", data)
        io.emit("receive_message", data)
    })
})

app.listen(port, hostname, () => {
    console.log(`server is running at http://${hostname}:${port}`)
})