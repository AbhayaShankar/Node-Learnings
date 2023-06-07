const mongoose = require("mongoose");

const connectionString = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.rcblahe.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;

// mongoose 5.11.10

const connectDB = (url) => {
  return mongoose.connect(connectionString);
};

module.exports = connectDB;
