import { Schema, model, models } from "mongoose";

const commentSchema=new Schema({
    comment:{
        type:String,
        required:true
    },
    username:{
        type:String
    },
    email:{
        type:String
    },
},{
        timestamps:true
});

const reportSchema=new Schema({
    report:{
        type:String
    },
    stallid:{
        type:String
    }
},{
    timestamps:true
})

const stallSchema=new Schema({
    stallname:{
        type:String,
    },
    ownerName:{
        type:String
    },
    address:{
        type:String,
    },
    StallImage:{
        type:String,
    },
    openTime:{
        type:String,
    },
    closeTime:{
        type:String,
    },
    menu:[String],
    food: {
        type:String,
    },
    coordinates:[],
    foodImage:[String],
    review:{
        type:String
    },
    postedBy:{
        type:String
    },
    comments:[commentSchema],
    gmapUrl:{
        type:String
    },
    reports:[reportSchema]
},{
    timesstamps:true
})
export const Stall=models.Stall||model("Stall",stallSchema);