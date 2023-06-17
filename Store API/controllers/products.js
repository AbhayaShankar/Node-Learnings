//
const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ featured: true });
  //   throw new Error("Testing Async Route");
  res.status(200).json({ prod: products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured, company } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }

  console.log("Query Passed in Postman/URL : ", req.query);
  console.log("Filtered Query Used to Filter Products : ", queryObject);

  const products = await Product.find(queryObject);
  res.status(200).json({ prod: products, nbHits: products.length });
};

module.exports = { getAllProducts, getAllProductsStatic };
