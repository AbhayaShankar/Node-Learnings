//
const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ featured: true });
  //   throw new Error("Testing Async Route");
  res.status(200).json({ prod: products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  // const { featured } = req.query;
  // console.log(featured);

  const products = await Product.find(req.query);
  //   const queryObject = {};

  //   if (featured) {
  //     queryObject.featured = featured;
  //   }
  res.status(200).json({ prod: products, nbHits: products.length });
};

module.exports = { getAllProducts, getAllProductsStatic };
