//
const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).sort("price name");
  res.status(200).json({ prod: products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const { name, featured, company, sort, createdAt, fields, limit, page } =
    req.query;

  // regex in MongoDB
  regexName = { $regex: name, $options: "i" };
  const queryObject = {};

  if (name) {
    queryObject.name = regexName;
  }

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }

  console.log("Query Passed in Postman/URL : ", req.query);
  console.log("Filtered Query Used to Filter Products : ", queryObject);

  //   const products = await Product.find(queryObject).limit(10);

  let result = Product.find(queryObject);

  // SORTING...
  if (sort) {
    console.log(sort);
    const sortedList = sort.split(",").join(" ");
    result = result.sort(sortedList);
  } else {
    result = result.sort("createdAt");
  }

  // SELECTING PARTICULAR FIELDS

  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  }

  // LIMIT

  if (limit) {
    result = result.limit(limit);
  } else {
    result = result.limit(10);
  }

  // PAGINATION

  if (page) {
    result = result.skip(+(page - 1) * limit);
  } else if (limit >= result.length) {
    result = result;
  } else {
    result = result.skip(0);
  }

  const products = await result;

  res.status(200).json({ nbHits: products.length, prod: products });
};

module.exports = { getAllProducts, getAllProductsStatic };
