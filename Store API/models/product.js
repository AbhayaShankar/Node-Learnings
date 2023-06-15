const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, "Product Name must be specified."],
  },
  price: {
    type: Number,
    required: [true, "Product Price is mandatory"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  ratings: {
    type: Number,
    default: 2.5,
  },
  company: {
    type: String,
    enum: {
      values: ["marcos", "ikea", "liddy", "caressa"],
      message: "{VALUE} is not supported",
    },
    // enum: ["marcos", "ikea", "liddy", "caressa"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Products", ProductSchema);
