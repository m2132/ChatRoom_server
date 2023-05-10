import jwt from "jsonwebtoken";
import userController from "./userController.js";
import userContext from "../Contexts/userContext.js";
const secret = "gf2v3y657ybijqw423ambu9";

const AuthController = {
  login: async (req, res, next) => {
    console.log("come");
    const { name, password } = req.body;
    // console.log("come" ,name,password);
    const user = await userContext.getUserByNameAndPass(name, password);
    if (user) {
      const token = jwt.sign(
        { userId: user._id, userName: user.name, email: user.email },
        secret
      );
      res.send({ accessToken: token });
    } else {
      res.status(401).send({ message: "unauthorized" });
    }
    next();
  },

  register: async (req, res, next) => {
    const user = req.body;
    console.log("name", req.body);
    const token = jwt.sign({ 
      Name: user.name, email: user.email }, secret);
    res.send({ accessToken: token });
    next();
  },

  auth: async (req, res, next) => {
    const token = req.headers.authorization.slice(7);
    console.log("token", token);
    try {
      const decoded = jwt.verify(token, secret);
      // req.userId = decoded.userId;
      next();
    } catch {
      res.status(401).send({ message: "unauthorized" });
      next();
    }
  },
};
export default AuthController;
