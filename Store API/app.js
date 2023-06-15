require("dotenv").config();
const NotFound = require("./middleware/not-found");
const ErrorHandler = require("./middleware/error-handler");

// Async errors

const express = require("express");
const errorHandlerMiddleware = require("./middleware/error-handler");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Home Page" });
});

app.use(NotFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    app.listen(port, () => console.log(`The server is running on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
