const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "ecom",
    format: async (req, file) => "png",
    public_id: (req, file) => {
      return `${file.originalname.split(".")[0]}_${Date.now()}`;
    },
  },
});

// const cloudinaryUploader=multer({storage:storage})
// const uploadMultiple=cloudinaryUploader.array("prodImage",10)
const uploadMultiple = multer({ storage: storage }).array("prodImage", 10);
module.exports = { uploadMultiple };
