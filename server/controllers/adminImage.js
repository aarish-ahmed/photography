import cloudinary from "../config/cloudinary.js";
import Admin from "../models/admin.js";

const adminImage = async (req, res) => {
  try {
    const uploadToCloudinary = await cloudinary.uploader.upload(req.file.path);
    const newImage = await Admin.create({
      image: {
        url: uploadToCloudinary.secure_url,
        publicID: uploadToCloudinary.public_id,
      },
    });
    console.log(newImage);
    return res.status(200).json([newImage]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
export default adminImage;
