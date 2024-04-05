const express = require("express");
const router = express.Router();

const AppliedJobs = require("../models/AppliedJobs");
const {
  verifyTokenandAuthorization,
  verifyToken,
} = require("../middleware/verifyToken");

router.get("/find/:userId/:jobId", verifyTokenandAuthorization, async (req, res) => {
    try {
      const { userId, jobId } = req.params;

      const appliedJob = await AppliedJobs.findOne({ userId, jobId });

      res.json(appliedJob);
    } catch (error) {
      console.error("Error checking applied status:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

router.post("/", verifyTokenandAuthorization, async (req, res) => {
  try {
    const appliedJob = new AppliedJobs(req.body);

    const newAppliedJob = await appliedJob.save();

    res.status(201).json(newAppliedJob);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;