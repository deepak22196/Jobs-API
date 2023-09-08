const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is a must field"],
    minlength: 3,
    maxlength: 50,
  },

  email: {
    type: String,
    required: [true, "email is a must field"],
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please provide a valid email",
    ],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "password is a must field"],
    minlength: 6,
    maxlength: 20,
  },
});

module.exports = mongoose.model("User", userSchema);
