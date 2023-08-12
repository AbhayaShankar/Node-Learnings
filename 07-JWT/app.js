// used for incorporating .env variables into your project.
require("dotenv").config();

// creating custom error handlers
require("express-async-errors");

const UserRouter = require("./routes/main");

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// Middlewares

// this is used to statically geenrate your public build file - similar to next js static geenration. But here the index.html file will be served statically for server side.
app.use(express.static("./public"));

// this is used so that we are able to view req.body object when a post route is being hit.
app.use(express.json());

app.use("/api/v1", UserRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
