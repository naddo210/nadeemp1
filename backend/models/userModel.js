// import { mongoose } from 'mongoose';
// const userSchema=new mongoose.mongoose.Schema({
//     name:{type:String, required:true},
//     email:{type:String, required:true, unique:true},
//     password:{type:String, required:true},
//     cartData:{type:Array,default:{}}
// },{minimize:false})
// const userModel=mongoose.models.user ||mongoose.model("User",userSchema);
// export default userModel

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: {
        type: [{
            itemId: { type: String, required: true },
            quantity: { type: Number, required: true }
        }],
        default: []
    }
}, { minimize: false });

const userModel = mongoose.models.user || mongoose.model("User", userSchema);
export default userModel;
