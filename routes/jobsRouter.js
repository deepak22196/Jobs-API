const express = require("express");

const router = express.Router();

const {
  getAllJobs,
  getJob,
  createJob,
  deleteJob,
  updateJob,
} = require("../controllers/jobs");

router.get("/", getAllJobs);
router.get("/:id", getJob);

router.post("/", createJob);
router.put("/:id", updateJob);
router.delete("/:id", deleteJob);

module.exports = router;
