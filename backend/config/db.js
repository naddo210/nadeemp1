import mongoose from "mongoose";
export const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://fooddel:Nadi9768@cluster0.jnxrti8.mongodb.net/food-del").then(()=> console.log("db connected"))
}