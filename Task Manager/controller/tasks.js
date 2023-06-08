const Task = require("../models/TaskSchema");

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    res.status(200).json({ tasks: allTasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const singleTask = await Task.findOne({ _id: taskID }).exec();

    if (!singleTask) {
      return res.status(404).json({ msg: `No task with id : ${taskID} found` });
    }

    res.status(200).json({ singleTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
