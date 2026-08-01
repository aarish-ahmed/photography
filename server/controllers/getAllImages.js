import Image from "../models/image.js";
const getAllImages = async (req, res) => {
    try {
        const allImages=await Image.find()
    return res.status(200).json(allImages)
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};
export default getAllImages