const Jobs = require("../models/jobModels.js");
const {v4:uuidv4}=require("uuid")

const home = (req, res) => {
  console.log("Hello this is backend server of Job Portal for name.txt");
  res.status(200).send("Hello this is backend server of Job Portal for name.txt");
};

const createJob = async (req, res) => {
    const uuid = uuidv4() + "_" + req.body.jobInfo.title;
    const job = new Jobs({
        jobid:uuid,
        ...req.body,
        postedBy:req.user._id
    });
    try{
        await job.save();
        res.status(201).send("Job has been created !!!");
    } catch (error) {
        res.status(400).send(error);
    }
};

const findAllJob = async (req, res) => {
  try {
    const job = await Jobs.find({});
    res.status(200).json({
      status: true,
      message: "All Jobs",
      errors: [],
      data: {
        jobs: job,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Unable to read all the jobs",
      errors: error,
      data: {},
    });
  }
};


const findSpecificJob = async (req, res) => {
  try {
    const job = await Jobs.find({}).limit(parseInt(req.query.limit));
    res.status(200).json({
      status: true,
      message: "All Jobs",
      errors: [],
      data: {
        jobs: job,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Unable to read all the jobs",
      errors: error,
      data: {},
    });
  }
};


  const findAllJobPos = async (req, res) => {
    try {
      const job = await Jobs.find({...req.body});
      res.status(200).json({
        status: true,
        message: "All Jobs of specific position",
        errors: [],
        data: {
          jobs: job,
        },
      });
    } catch (error) {
      res.status(400).json({
        status: false,
        message: "Unable to read the jobs",
        errors: error,
        data: {},
      });
    }
  };


module.exports = {
  home,
  createJob,
  findAllJob,
  findAllJobPos,
  findSpecificJob
};
