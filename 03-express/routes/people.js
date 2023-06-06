const express = require("express");
const router = express.Router();

let { people } = require("../data");

router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

router.post("/", (req, res) => {
  console.log("Body", req.body);
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please enter name field" });
  }
  res.status(201).json({ success: true, person: name });
});

router.post("/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please enter name field" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === +id);

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id: ${id}` });
  }
  const newPeople = people.filter((peep) => peep.id !== +id);
  console.log(newPeople);
  return res.status(200).json({ success: true, data: newPeople });
});

module.exports = router;
