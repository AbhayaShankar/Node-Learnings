const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json(product);
};

const getAllProducts = async (req, res) => {
  const allProducts = await Product.find({});
  res.status(StatusCodes.OK).json({ products: allProducts });
};

module.exports = { createProduct, getAllProducts };
