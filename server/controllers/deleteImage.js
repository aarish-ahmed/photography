import Image from "../models/image.js";
const deleteImage = async (req, res) => {
    try {
      
        const id=req.params.id
       
    await Image.findOneAndDelete({_id:id})
    return res.status(200).json({
        message:'Image deleted Successfully'
    })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};
export default deleteImage