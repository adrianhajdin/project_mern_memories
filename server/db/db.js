import mongoose from "mongoose";

const connectDB =async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected!");
    } catch (error) {
        console.log("Error in MongoDB connection: ",error.message);
    }
}

export default connectDB;
