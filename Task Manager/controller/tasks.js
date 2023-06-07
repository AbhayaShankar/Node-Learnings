const Task = require("../models/TaskSchema");

const getAllTasks = (req, res) => {
  res.send("Get All Tasks");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("updating Task");
};

const deleteTask = (req, res) => {
  res.send("deleting Task.");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
