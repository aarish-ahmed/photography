import cloudinary from "../config/cloudinary.js";
import Image from "../models/image.js";
import sharp from "sharp";
import { Readable } from "stream";

const addImage = async (req, res) => {
    try {
        const title = req.body.title;
        const description = req.body.description;
        const category = req.body.category;

        if (!req.file) {
            return res.status(400).json({ message: "No image provided" });
        }

        // 1. Sharp diye image buffer compress ebong resize kora
        const compressedImageBuffer = await sharp(req.file.buffer)
            .resize({ width: 1920, withoutEnlargement: true })
            .jpeg({ quality: 80 })
            .toBuffer();

        // 2. Cloudinary stream upload ke Promise-e wrap kora jate await kora jay
        const uploadToCloudinary = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: "chitromoncho_uploads", resource_type: "image" },
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );
            Readable.from(compressedImageBuffer).pipe(uploadStream);
        });

        // 3. Upload success hole Cloudinary URL diye MongoDB te data save kora
        const newImage = await Image.create({
            title,
            description,
            category,
            image: {
                url: uploadToCloudinary.secure_url,
                publicID: uploadToCloudinary.public_id
            }
        });

        console.log(newImage);
        return res.status(200).json([newImage]);

    } catch (error) {
        console.error(error.message);
       

        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};  

export default addImage;