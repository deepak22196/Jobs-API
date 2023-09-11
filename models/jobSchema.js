const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "company is a must field"],

      maxlength: 50,
    },

    position: {
      type: String,
      required: [true, "position is a must field"],
      maxlength: 50,
    },

    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },

    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "creater is must field"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
