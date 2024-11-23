import mongoose from "mongoose";

const dbConnect=async()=>{
    try {
       await mongoose.connect("mongodb+srv://devyani:devyani3717@cluster0.wgd1u.mongodb.net/")
       console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("Connection failed",error)
    }
}
export default dbConnect;
