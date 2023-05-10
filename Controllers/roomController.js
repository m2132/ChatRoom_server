import roomContext from "../Contexts/roomContext.js";

const roomController = {
  getList: async (req, res) => {
    const rooms = await roomContext.getAllRooms();
    res.send(rooms);
  },

  getById: async (req, res) => {
    const room = await roomContext.getRoomById(req.params.id);
    res.send(room);
  },

  addRoom: async (req, res) => {
    console.log("1");
    const { name, description } = req.body;
    // const { room, user, roomId, message } = req.body;
    // console.log("the object:  ",room, user, roomId, message );

    const newRoom = await roomContext.addRoom({ name, description });
    // const newRoom = await roomContext.addRoom({ room, user, roomId, message });
    console.log("new room:  ", newRoom);

    res.send(newRoom);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const updatedRoom = await roomContext.updateRoom(id, { name });
    res.send(updatedRoom);
  },

  delete: async (req, res) => {
    const deleted = await roomContext.removeRoom(req.params.id);
    res.send(deleted);
  },
};

export default roomController;
