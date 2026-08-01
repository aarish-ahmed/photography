import Image from '../models/image.js'
const getOneImage = async (req, res) => {
    try {
        const id=req.params.id
        console.log(id)
    const findImage=await Image.findById(id)
    return res.status(200).json([findImage])
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};
export default getOneImage