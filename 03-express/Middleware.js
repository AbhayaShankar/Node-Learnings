const express = require("express");
const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");

const app = express();

// Request ===> Middleware ===> Response
// Middlewares as the name suggests - comes between req and res and has the data from both req and res.

// 1. use vs route
// 2. options - our own / express / thrid party.

// app.use([authorize, logger]);

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/api/products", (req, res) => {
  res.send("Products Page");
});

app.get("/api/items", [authorize, logger], (req, res) => {
  res.send("Items Page");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
