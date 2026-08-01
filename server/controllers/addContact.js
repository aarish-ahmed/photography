import Contact from "../models/contact.js";
import cloudinary from "../config/cloudinary.js";

const addContact = async (req, res) => {
  try {
    let contact = await Contact.findOne();

    let image = contact?.image;

    if (req.file) {
      if (contact?.image?.publicID) {
        await cloudinary.uploader.destroy(contact.image.publicID);
      }

      const uploadResult = await cloudinary.uploader.upload(req.file.path);

      image = {
        url: uploadResult.secure_url,
        publicID: uploadResult.public_id,
      };
    }

    contact = await Contact.findOneAndUpdate(
      {},
      {
        image,
        studio: {
          email: req.body.email,
          phone: req.body.phone,
        },
        printSales: {
          website: req.body.printSales,
        },
        socialMedia: {
          instagram: req.body.instagram,
          linkedin: req.body.linkedin,
        },
        projectWebsites: {
          microsculpture: req.body.microsculpture,
          extinctAndEndangered: req.body.extinct,
          hiddenBeauty: req.body.hiddenBeauty,
        },
      },
      {
        new: true,
        upsert: true,
      }
    );

    res.json(contact);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export default addContact;