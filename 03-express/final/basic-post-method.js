const express = require("express");
const app = express();

let { people } = require("./data");

// adding static assets.
app.use(express.static("./methods-public"));

//parse form data using middleware concept...
app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;

  if (!name) {
    return res.status(401).send("Please Enter the Name Field.");
  } else {
    return res.status(200).json({ success: true, user: name });
  }
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});