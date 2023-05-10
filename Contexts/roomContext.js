import RoomModel from "../Models/roomModel.js";
import mongoose from "mongoose";

// Broadcast to all users in a room
// Broadcast to all users except sender


const roomContext = {

    getAllRooms: async () => {
      const rooms = await RoomModel.find();
      return rooms;
    },
  
    getRoomById: async (id) => {
      const room = await RoomModel.findById(id);
      return room;
    },
  
    addRoom: async ({name, description }) => {
      // addRoom: async ({ room, user, roomId, message }) => {
        // const newRoom = new RoomModel({ room, user, roomId, message });
        const newRoom = new RoomModel({ name, description  });
        console.log("newroom 2 :",newRoom)
        await newRoom.save();
        return newRoom;
    },
  
    updateRoom: async (id, { name }) => {
      const updatedRoom = await RoomModel.findByIdAndUpdate(id, { name }, { new: true });
      return updatedRoom;
    },
   
    removeRoom: async (id) => {
      const deleted = await RoomModel.findByIdAndRemove(id);
      return deleted;
    }
  };



export default roomContext;