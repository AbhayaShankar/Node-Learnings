require("dotenv").config();
require("express-async-errors");
const NotFound = require("./middleware/not-found");
const ErrorHandler = require("./middleware/error-handler");
const ProductsRouter = require("./routes/products");
// Async errors

const connectDB = require("./db/connect");

const express = require("express");
const app = express();

// Middlewares
app.use(express.json());

//Routes

app.get("/", (req, res) => {
  res.send(
    `<h1>THE STORE API</h1> <a href="/api/v1/products">Products Page</a>`
  );
  //   res.status(200).json({ msg: "Home Page" });
});

app.use("/api/v1/products", ProductsRouter);

app.use(NotFound);
app.use(ErrorHandler);

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`The server is listening on ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
