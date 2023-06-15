//

const getAllProductsStatic = async (req, res) => {
  throw new Error("Testing Async Route");
  res.status(200).json({ msg: "All Products Testing Route" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "Products Route" });
};

module.exports = { getAllProducts, getAllProductsStatic };
