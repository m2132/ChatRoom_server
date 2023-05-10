import mongoose from "mongoose";
// import uuid from "uuid";

const MessageModelSchema = mongoose.Schema({
//   id: {
//     type: String,
//     required: true,
//     unique: true,
//     // default: uuid.v4,
//   },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "room",
    required: true,  
  }, 
  text: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },
  type: {
    type: String,
    enum: ["text", "image", "file"],
    default: "text",
  },
  status: {
    type: String,
    enum: ["sent", "delivered", "read"],
    default: "sent",
  },
//   metadata: {
//     type: Object,
//   },
});
 
export default mongoose.model("message", MessageModelSchema);
