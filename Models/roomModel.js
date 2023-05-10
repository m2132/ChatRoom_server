import mongoose from "mongoose";

const RoomModelSchema = mongoose.Schema({
    // id: {
    //     type: String,
    //     required: true,
    //     unique: true
    //   },
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      users: {
        type: [String],
        required: true,
        default: []
      },
      createdAt: {
        type: Date,
        default:  Date.now()
      },
    //   roomType: {
    //     type: String,
    //     enum: ['public', 'private'],
    //     default: 'public'
    //   }
});
RoomModelSchema.virtual('usersCount').get(function(){
    return this.users.length;
});

export default mongoose.model("room", RoomModelSchema);
 