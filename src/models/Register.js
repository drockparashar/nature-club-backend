import mongoose from "mongoose";

const registerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    regno:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    skills:{
        type:String,
        required:true
    },
    reason:{
        type:String,
        required:true
    }
});

export const RegisterModel=mongoose.model("register",registerSchema);