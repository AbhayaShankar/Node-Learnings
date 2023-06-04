const express = require("express");

const app = express();

// methods in express :

//app.get
//app.post
//app.put
//app.delete
//app.use
//app.all
//app.listen

app.get("/", (req, res) => {
  res.status(200).send("Home page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
