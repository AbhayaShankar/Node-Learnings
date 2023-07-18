const express = require("express");

const { uploadImageProduct } = require("../controllers/uploadsController");

const {
  getAllProducts,
  createProduct,
} = require("../controllers/productController");

const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.post("/uploads", uploadImageProduct);

module.exports = router;
