import Image from "../models/image.js";
import { v2 as cloudinary } from "cloudinary";

const deleteImage = async (req, res) => {
  try {
    const id = req.params.id;

    const imageDoc = await Image.findById(id);

    if (!imageDoc) {
      return res.status(404).json({
        message: "Image not found in database",
      });
    }

    const cloudinaryId = imageDoc.image?.publicID;

    // 1. Delete from Database First
    await Image.findByIdAndDelete(id);

    // 2. Send Response Immediately for a faster user experience
    res.status(200).json({
      message: "Image deleted successfully",
    });

    // 3. Delete from Cloudinary asynchronously in the background
    if (cloudinaryId) {
      cloudinary.uploader.destroy(cloudinaryId)
        .then((response) => {
          console.log("Cloudinary background deletion response:", response);
        })
        .catch((err) => {
          console.error("Cloudinary background deletion error:", err);
        });
    } else {
      console.log("Warning: No valid public ID found. Cloudinary deletion skipped.");
    }

  } catch (error) {
    console.error("Deletion Error:", error);
    
    // Check if response was already sent before sending an error
    if (!res.headersSent) {
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
};

export default deleteImage;