import mongoose from 'mongoose'

const uri=
"mongodb+srv://michal:mc21322132@cluster0.mkr8lqu.mongodb.net/ChatRoom?retryWrites=true&w=majority"


const connectDB = async ()=>{
    await mongoose.connect(uri);
};

mongoose.connection.on("connected",()=>{
    console.log("mongo is connected");
});

mongoose.set('toJSON',{
    virtuals: true,
    transform: (doc,converted)=>{
        delete converted._id;
    }
});

export default connectDB;
