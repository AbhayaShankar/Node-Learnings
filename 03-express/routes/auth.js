const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  const { name } = req.body;

  if (!name) {
    return res.status(401).send("Please Enter the Name Field.");
  } else {
    return res.status(200).send(`Welcome ${name}`);
  }
});

module.exports = router;
