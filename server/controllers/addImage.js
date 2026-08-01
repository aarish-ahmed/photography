import cloudinary from "../config/cloudinary.js";
import Image from "../models/image.js";


const addImage = async (req, res) => {
    try {
        
        const title=req.body.title
        const description=req.body.description
     
    const uploadToCloudinary= await cloudinary.uploader.upload(req.file.path)
    const newImage=await Image.create({
        title,
        description,
        image:{
            url:uploadToCloudinary.secure_url ,
        publicID:uploadToCloudinary.public_id
        }
    })
    console.log(newImage)
    return res.status(200).json(
       [newImage]
    )
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};  
export default addImage