import userModel from "../Models/userModel.js";

const userContext = {
  getAllUsers: async () => {
    let users = await userModel.find();
    return users;
  },

  getUserById: async (id) => {
    const user = await userModel.findById(id);
    return user;
  },

  getUserByNameAndPass: async (name, password) => {
    const user = await userModel.findOne({ name, password });
    return user;
  },

  addUser: async ({ name, email, password }) => {
    const existingUser = await userModel.findOne({ name });
    // if (existingUser) {
    //   throw new Error("Username already exists");
    // }
    console.log("1");
    const newUser = new userModel({ name, email, password });
    await newUser.save();
    return newUser;
  },

  updateUser: async (id, { name, email, password }) => {
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true }
    );
    return updatedUser;
  },

  removeUser: async (id) => {
    const deleted = await userModel.findByIdAndRemove(id);
    return deleted;
  },
};

export default userContext;
