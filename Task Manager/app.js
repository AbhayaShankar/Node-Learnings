const express = require("express");
const tasks = require("./routes/tasks");
const pageNotFound = require("./middleware/page-not-found");
const ErrorHandler = require("./middleware/errorHandler");

// For using .env variables in the app.
require("dotenv").config();
const connectDB = require("./db/connect");

const app = express();

const port = process.env.PORT || 3000;

// middleware

app.use(express.static("./public"));
app.use(express.json());

// Setting up routes -- planning what we would be having or requiring...

// app.get("/api/v1/tasks/"); -- Get all the tasks.
// app.post("/api/v1/tasks/"); -- Add new task to the Task Manager.
// app.get("/api/v1/tasks/:id"); -- get single task.
// app.patch("/api/v1/tasks/:id"); -- update task.
// app.delete("/api/v1/tasks/:id"); -- delete task.

// app.get("/", (req, res) => {
//   res.status(200).send("Home Page");
// });

app.use("/api/v1/tasks", tasks);
app.use(pageNotFound);
app.use(ErrorHandler);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () => {
      console.log(`Server running on ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
