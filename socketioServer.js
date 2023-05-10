import { Server } from "socket.io";
import messageContext from "./Contexts/messageContext";

const setupSocketIO = (server) => {
  const io = new Server(server);

  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("join", (roomId, userId) => {
      socket.join(roomId);
      console.log(`User ${userId} joined room ${roomId}`);
    });

    socket.on("leave", (roomId, userId) => {
      socket.leave(roomId);
      console.log(`User ${userId} left room ${roomId}`);
    });

    socket.on("message", async ({ roomId, userId, text }) => {
      const newMessage = await messageContext.addMessage({
        user: userId,
        room: roomId,
        text,
      });
      io.to(roomId).emit("message", newMessage);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
};

module.exports = setupSocketIO;
