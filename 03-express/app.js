const express = require("express");
const { products } = require("./data");

const app = express();

// Request ===> Middleware ===> Response
// Middlewares as the name suggests - comes between req and res and has the data from both req and res.

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

app.get("/", logger, (req, res) => {
  res.send("Home Page");
});

app.get("/about", logger, (req, res) => {
  res.send("About Page");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
