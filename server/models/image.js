import mongoose from "mongoose";

const imageSchema=mongoose.Schema({
    title:{
     type:String,
     required:true
    },
    description:{
        type:String,
    },
    image:{
        url:{
        type:String,
        required:true
    },
    publicID:{
        type:String,
        required:true,
    }
    }
},{timestamps:true})

const Image=mongoose.model('images',imageSchema)

export default Image