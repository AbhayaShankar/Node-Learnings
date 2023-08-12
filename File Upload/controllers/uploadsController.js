const path = require("path");
const { StatusCodes } = require("http-status-codes");
const cloudinary = require("cloudinary").v2;
const CustomError = require("../errors");
const fs = require("fs");

const uploadImageProductLocal = async (req, res) => {
  // console.log(req.files);
  // console.log("Name of the file : ", req.files.image.name);
  // console.log("mimetype : ", req.files.image.mimetype);

  if (!req.files) {
    throw new CustomError.BadRequestError("No File Uploaded");
  }

  const productImage = req.files.image;

  // mimetype gives you info about the type of file if is:
  // Image - png/jpg/svg/jpeg
  // pdf/word/xlsx etc
  if (!productImage.mimetype.startsWith("image")) {
    throw new CustomError.BadRequestError("Please provide valid Image file");
  }

  // 30 KB size
  const KB30 = 1024 * 30;

  if (productImage.size > KB30) {
    throw new CustomError.BadRequestError(
      "Please ensure image is smaller than 30KB"
    );
  }

  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${productImage.name}`
  );

  await productImage.mv(imagePath);

  res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

const uploadImageProduct = async (req, res) => {
  // console.log(req.files.image);
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "file-upload-proj",
    }
  );

  // console.log(result);
  fs.unlinkSync(req.files.image.tempFilePath);

  // entire url for cloudinary is secure_url - log the result and check for more options available
  return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
};

module.exports = { uploadImageProduct };
