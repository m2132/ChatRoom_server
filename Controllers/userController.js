import userContext from "../Contexts/userContext.js";
import multer from 'multer';

import mail from "../mail/mail.js";

const UserController = {
  getList: async (req, res) => {
    let users = await userContext.getAllUsers();
    res.send(users);
  },

  getById: async (req, res) => {
    const user = await userContext.getUserById(req.params.id);
    res.send(user);
  },

  getByNameAndPass: async (req, res) => {
    const user = await userContext.getUserByNameAndPass(
      req.body.name,
      req.body.password
    );
    res.send(user);
  },

  addUser: async (req, res) => {
    // try {
    const { name, email, password } = req.body;
    const newUser = await userContext.addUser({ name, email, password });
    mail.sendEmailRegister(name, email);
    res.send(newUser);
    // } catch (error) {
    //   res.status(400).send({ message: error.message });
    // }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    // try {
    const updatedUser = await userContext.updateUser(id, {
      name,
      email,
      password,
    });
    res.send(updatedUser);
    // } catch (error) {
    //   res.status(400).send({ message: error.message });
    // }
  },

  // delete: async (req, res) => {
  //   try {
  //     const deletedUser = await userContext.removeUser(req.params.id);
  //     console.log("delte user!!!!!!!!!!!!!!!!!!!!!!!!!!!:::::",req.params.id)
  //     if (deletedUser) {
  //       res.send(deletedUser);
  //     } else {
  //       const message = `User with id ${req.params.id} not found`;
  //       const errorView = await ejs.renderFile("views/error.ejs", { message });
  //       res.status(404).send(errorView);
  //     }
  //   } catch (error) {
  //     const message = `Error deleting user with id ${req.params.id}: ${error.message}`;
  //     const errorView = await ejs.renderFile("views/error.ejs", { message });
  //     res.status(500).send(errorView);
  //   }
  // }

  delete: async (req, res) => {
    const deleted = await userContext.removeUser(req.params.id);
    res.send(deleted);
  },

  uploadProfilePicture: async (req, res) => {
    try {
      const user = await userContext.getUserById(req.params.id);
  
      if (!user) {
        return res.status(404).send({ error: 'User not found' });
      }
   
      if (!req.file) {
        return res.status(400).send({ error: 'Please upload a file' });
      }
  
      user.profilePicture = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
  
      await user.save();
  
      res.send({ message: 'Profile picture uploaded successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Internal server error' });
    }
  }, 

  deleteProfilePicture: async (req, res) => {
    // try {
      const user = await userContext.getUserById(req.params.id);

      // if (!user) {
      //   return res.status(404).send({ error: "User not found" });
      // }

      user.profilePicture = undefined;

      await user.save();

      res.send({ message: "Profile picture deleted successfully" });
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).send({ error: "Internal server error" });
    // }
  },
};
export default UserController;
