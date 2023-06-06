const express = require("express");
const app = express();

let { people } = require("./data");

// adding static assets.
app.use(express.static("./methods-public"));

//parse form data using middleware concept...
app.use(express.urlencoded({ extended: false }));

//parse json...
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  console.log("Body", req.body);
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please enter name field" });
  }
  res.status(201).json({ success: true, person: name });
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please enter name field" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === +id);
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person found with id : ${id}` });
  }
  const newPeople = people.map((peep) => {
    if (peep.id === +id) {
      peep.name = name;
    }
    return peep;
  });
  res.status(200).json({ success: true, data: newPeople });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;

  if (!name) {
    return res.status(401).send("Please Enter the Name Field.");
  } else {
    return res.status(200).send(`Welcome ${name}`);
  }
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
