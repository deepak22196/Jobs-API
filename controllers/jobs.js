const { StatusCodes } = require("http-status-codes");
const Job = require("../models/jobSchema");

const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ createdBy: req.user.userId }).sort(
      "createdAt"
    );
    res.status(StatusCodes.OK).json({ jobs });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createJob = async (req, res) => {
  try {
    req.body.createdBy = req.user.userId;
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json({ message: "success", job });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getJob = async (req, res) => {
  try {
    const {
      user: { userId },
      params: { id: jobId },
    } = req;

    const job = await Job.findOne({ _id: jobId, createdBy: userId });

    if (!job) {
      res.status(404).json({ message: "no job found with the given id" });
      return;
    }
    res.status(StatusCodes.OK).json({ message: "success", job });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateJob = async (req, res) => {};

const deleteJob = async (req, res) => {};

module.exports = { getAllJobs, createJob, getJob, updateJob, deleteJob };
