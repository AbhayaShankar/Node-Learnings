const path = require("path");
const { StatusCodes } = require("http-status-codes");

const uploadImageProduct = async (req, res) => {
  console.log(req.files);
  console.log("Name of the file : ", req.files.image.name);
  console.log("mimetype : ", req.files.image.mimetype);

  const productImage = req.files.image;

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
