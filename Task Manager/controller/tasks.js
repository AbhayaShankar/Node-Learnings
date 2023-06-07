const getAllTasks = (req, res) => {
  res.send("Get All Tasks");
};

const createTask = (req, res) => {
  res.send("New task added.");
};

const getTask = (req, res) => {
  res.send("Get Single Task");
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
