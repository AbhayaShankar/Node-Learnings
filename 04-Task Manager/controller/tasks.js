const Task = require("../models/TaskSchema");
const AsyncWrapper = require("../middleware/asyncWrapper");

const getAllTasks = AsyncWrapper(async (req, res) => {
  const allTasks = await Task.find({});
  res.status(200).json({ tasks: allTasks });
});

const createTask = AsyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = AsyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const singleTask = await Task.findOne({ _id: taskID }).exec();

  if (!singleTask) {
    const error = new Error("Not Found");
    error.status = 404;
    return next(error);
    return res.status(404).json({ msg: `No task with id : ${taskID} found` });
  }

  res.status(200).json({ singleTask });
});

const updateTask = AsyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const data = req.body;

  const task = await Task.findOneAndUpdate({ _id: taskID }, data, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res
      .status(200)
      .json({ msg: `Couldn't update task with id: ${taskID}` });
  }

  res.status(200).json({ id: taskID, data: data });
});

const deleteTask = AsyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    return res
      .status(404)
      .json({ msg: `Couldn't Find task with id : ${taskID}` });
  }

  res.status(200).json({ task });
  // res.status(200).send("Deletion success")
  // res.status(204).json({task: null , delete: "Success"})
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
