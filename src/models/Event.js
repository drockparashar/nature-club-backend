import mongoose, { mongo } from "mongoose";

const eventSchema=new mongoose.Schema({
    event:{
        type:String,
        required:true
    },
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
    feedback:{
        type:String,
        required:true
    },

});

export const EventModel=mongoose.model("event",eventSchema);