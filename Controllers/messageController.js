import messageContext from "../Contexts/messageContext.js";

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
    // try {
      const { user, room, text, type } = req.body;
      const newMessage = await messageContext.addMessage({
        user,
        room,
        text,
        type,
      });
      res.send(newMessage);
    // } catch (error) {
    //   res.status(400).send({ message: error.message });
    // }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { text, type, status } = req.body;
    try {
      const updatedMessage = await messageContext.updateMessage(id, {
        text,
        type,
        status,
      });
      res.send(updatedMessage);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
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