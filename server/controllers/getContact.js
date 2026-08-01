import Contact from "../models/contact.js";

const getContact = async (req, res) => {
  try {
    const contact = await Contact.findOne();

    return res.status(200).json(contact);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export default getContact;