import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
  title: {
    type: String,
   
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    url: {
      type: String,
      required: true,
    },
    publicID: {
      type: String,
      required: true,
    },
  },
}, { timestamps: true });

 const Image=mongoose.model('Image',imageSchema)
  export default Image