const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

// POST feedback
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, msg: "All fields required!" });
    }

    // Save to MongoDB
    const feedback = new Feedback({ name, email, message });
    await feedback.save();

    console.log("📩 New Feedback Received:");
    console.log(feedback);

    res.status(201).json({
      success: true,
      msg: "Feedback saved successfully!",
      data: feedback,
    });
  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).json({ success: false, msg: "Server Error" });
  }
});

// GET all feedbacks (optional — to check in Postman)
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: feedbacks });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Server Error" });
  }
});

module.exports = router;
