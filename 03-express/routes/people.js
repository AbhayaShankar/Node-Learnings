const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPeople,
  createNewPeople,
  updatePeople,
  deletePeople,
} = require("../controllers/people");

router.get("/", getPeople);

router.post("/", createPeople);

router.post("/postman", createNewPeople);

router.put("/:id", updatePeople);

router.delete("/:id", deletePeople);

module.exports = router;
