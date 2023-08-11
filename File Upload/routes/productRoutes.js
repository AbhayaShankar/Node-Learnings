const express = require("express");

const { uploadImageProduct } = require("../controllers/uploadsController");

const {
  getAllProducts,
  createProduct,
} = require("../controllers/productController");

const router = express.Router();

// router.post("/", createProduct);
// router.get("/", getAllProducts);

// Above two lines of code are same but below is chained and above is explicit.
router.route("/").get(getAllProducts).post(createProduct);
router.post("/uploads", uploadImageProduct);

module.exports = router;
