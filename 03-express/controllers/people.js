let { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPeople = (req, res) => {
  console.log("Body", req.body);
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please enter name field" });
  }
  res.status(201).json({ success: true, person: name });
};

const createNewPeople = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please enter name field" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
};

const updatePeople = (req, res) => {
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
};

const deletePeople = (req, res) => {
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
};

module.exports = {
  getPeople,
  createPeople,
  createNewPeople,
  updatePeople,
  deletePeople,
};
