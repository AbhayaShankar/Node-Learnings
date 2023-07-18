const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ created: true });
};

const getAllProducts = async (req, res) => {
  res.send("List All Products");
};

module.exports = { createProduct, getAllProducts };
