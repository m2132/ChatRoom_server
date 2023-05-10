import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./db.js";

import userRouter from "./Routers/userRouter.js";
import roomRouter from "./Routers/roomRouter";
import messageRouter from "./Routers/messageRouter";
import setupSocketIO from "./socketioServer";

const app = express();
const server = http.createServer(app);
setupSocketIO(server);

connectDB();

const port = 4000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/room", roomRouter);
app.use("/message", messageRouter);

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
