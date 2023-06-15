require("dotenv").config();
const NotFound = require("./middleware/not-found");
const ErrorHandler = require("./middleware/error-handler");

const connectDB = require("./db/connect");

// Async errors

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
