import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    image: {
      url: {
        type: String,
      },
      publicID: {
        type: String,
      },
    },

    studio: {
      email: {
        type: String,
      },
      phone: {
        type: String,
      },
    },

    printSales: {
      website: {
        type: String,
      },
    },

    socialMedia: {
      instagram: {
        type: String,
      },
      linkedin: {
        type: String,
      },
    },

    projectWebsites: {
      microsculpture: {
        type: String,
      },
      extinctAndEndangered: {
        type: String,
      },
      hiddenBeauty: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;