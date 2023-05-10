import express from 'express'
// import {io ,Server} from'socket.io';
// import http from 'http'
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './db.js'

import userRouter from "./Routers/userRouter.js";
import roomRouter from "./Routers/roomRouter.js";
import messageRouter from "./Routers/messageRouter.js";
// import AuthController from './Controllers/authController.js';

const app = express()
connectDB();

const port =4000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
// const server = http.createServer(app)
// const io = new Server(server, {
//     cors:{
//         origin: "http://localhost:3000"
//     }
// })
app.use("/user",userRouter) 
app.use("/room",roomRouter)
app.use("/message",messageRouter)


app.listen(port, () => {
     console.log(`app listening on http://localhost:${port}`)
 });


 // // Define a Socket.IO event handler for when a client connects
// io.on('connection', (socket) => {
//     console.log('A client connected:', socket.id);
  
//     // Define a Socket.IO event handler for when a client sends a message
//     socket.on('message', (message) => {
//       console.log('Received message:', message);
  
//       // Broadcast the message to all other clients
//       socket.broadcast.emit('message', message);
//     });
  
//     // Define a Socket.IO event handler for when a client disconnects
//     socket.on('disconnect', () => {
//       console.log('A client disconnected:', socket.id);
//     });
//   });