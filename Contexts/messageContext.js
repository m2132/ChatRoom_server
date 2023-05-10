import MessageModel from "../Models/messageModel.js";

const messageContext = {
  getAllMessages: async () => {
    let messages = await MessageModel.find();
    return messages;
  },
 
  getMessageById: async (id) => {
    const message = await MessageModel.findById(id);
    return message;
  },

  addMessage: async ({ user, room, text, type }) => {
    const newMessage = new MessageModel({ user, room, text, type });
    await newMessage.save();
    return newMessage;
  },

  updateMessage: async (id, { text, type, status }) => {
    const updatedMessage = await MessageModel.findByIdAndUpdate(
      id,
      { text, type, status },
      { new: true }
    );
    return updatedMessage;
  },

  removeMessage: async (id) => {
    const deletedMessage = await MessageModel.findByIdAndDelete({ _id: id });
    return deletedMessage;
  },
};

export default messageContext;