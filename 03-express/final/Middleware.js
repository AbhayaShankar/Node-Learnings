const express = require("express");
const logger = require("./logger");
const authorize = require("./authorize");

const app = express();

// Request ===> Middleware ===> Response
// Middlewares as the name suggests - comes between req and res and has the data from both req and res.

app.use([authorize, logger]);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/api/products", (req, res) => {
  res.send("Products Page");
});

app.get("/api/items", (req, res) => {
  res.send("Items Page");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
