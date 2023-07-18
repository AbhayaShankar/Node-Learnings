const path = require("path");
const { StatusCodes } = require("http-status-codes");

const CustomError = require("../errors");

const uploadImageProduct = async (req, res) => {
  // console.log(req.files);
  // console.log("Name of the file : ", req.files.image.name);
  // console.log("mimetype : ", req.files.image.mimetype);

  if (!req.files) {
    throw new CustomError.BadRequestError("No File Uploaded");
  }

  const productImage = req.files.image;

  if (!productImage.mimetype.startsWith("image")) {
    throw new CustomError.BadRequestError("Please provide valid Image file");
  }

  if (productImage.size > 204800) {
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

module.exports = { uploadImageProduct };
