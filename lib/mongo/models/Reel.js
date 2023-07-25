import { Schema, model, models } from "mongoose";

const reelSchema=new Schema({
    video:{
        type:String,
    },
    caption:{
        type:String
    },
    like:[]
},{
    timestamps:true
});

export const Reel=models.Reel||model("Reel",reelSchema);