require("dotenv").config();
require("express-async-errors");
const sendEmail = require("./controllers/sendEmail");

const express = require("express");
const app = express();

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send('<h2>Send Email Project</h2> <a href="/send" >send Email</a>');
});

app.get("/send", sendEmail);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

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
