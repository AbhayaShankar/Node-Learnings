const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllJobs = async (req, res) => {
  const allJobs = await Job.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json(allJobs);
};

const getJob = async (req, res) => {
  res.send("Get Single Job");
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  // job = { ...job, job_id: job._id };
  res.status(StatusCodes.CREATED).json(job);
};

const updateJob = async (req, res) => {
  res.send("Update a particular Job");
};

const deleteJob = async (req, res) => {
  res.send("Delete a Job");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
