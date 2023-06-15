//
const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ featured: true });
  //   throw new Error("Testing Async Route");
  res.status(200).json({ msg: products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "Products Route" });
};

module.exports = { getAllProducts, getAllProductsStatic };
