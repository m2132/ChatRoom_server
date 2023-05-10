import messageContext from "../Contexts/messageContext.js";
import socketioServer from "../socketioServer.js";

const MessageController = {
  getList: async (req, res) => {
    let messages = await messageContext.getAllMessages();
    res.send(messages);
  },

  getById: async (req, res) => {
    const message = await messageContext.getMessageById(req.params.id);
    res.send(message);
  },

  addMessage: async (req, res) => {
    const { user, room, text, type } = req.body;
    const newMessage = await messageContext.addMessage({ user, room, text, type });
    // Emit a message event to all clients in the room
    socketioServer.to(room).emit('message', newMessage);
    res.send(newMessage);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { text, type, status } = req.body;
    const updatedMessage = await messageContext.updateMessage(id, { text, type, status });
    // Emit a message event to all clients in the room
    socketioServer.to(updatedMessage.room).emit('message', updatedMessage);
    res.send(updatedMessage);
  },

  delete: async (req, res) => {
    try {
      const deletedMessage = await messageContext.removeMessage(req.params.id);
      res.send(deletedMessage);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
};

export default MessageController;
