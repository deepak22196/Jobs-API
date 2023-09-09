const { StatusCodes } = require("http-status-codes");
const sampleUsers = require("../sampleUsers");
const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");

const registerSampleUsers = async (req, res) => {
  try {
    await User.deleteMany({});
    const users = await User.create(sampleUsers);
    res.status(StatusCodes.CREATED).json({ users });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const register = async (req, res) => {
  try {
    const user = await User.create({ ...req.body });

    const token = user.createToken();
    res.status(StatusCodes.CREATED).json({ user: user.name, token });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Please provide email and password" });
      return;
    }

    const user = await User.findOne({ email });
    if (!user) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Please register first" });
      return;
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Incorrect username or password" });
      return;
    }
    const token = user.createToken();
    res.status(StatusCodes.CREATED).json({ user: user.name, token });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { registerSampleUsers, register, login };
