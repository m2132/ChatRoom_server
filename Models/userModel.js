import mongoose from 'mongoose'

const UserModelSchema = mongoose.Schema({
      name: {
        type: String,
        required: true,
        unique: true
      },
      email: {
        type: String,
        required: true 
      },
      password: {
        type: String,
        required: true
      },
      profilePicture: {
        data: Buffer,
        contentType: String
      },
      statusMessage: {
        type: String
      },
      lastSeen: {
        type: Date,
        default: Date.now
      }
})
export default mongoose.model('user', UserModelSchema); 
