const mongoose = require("mongoose");

// mongoose 5.11.10

const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
