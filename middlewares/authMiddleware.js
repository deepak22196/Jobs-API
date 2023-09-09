const User = require("../models/userSchema");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const authHeader = req.header.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "authorization failed" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "authorization failed", error: error });
  }
};

module.exports = auth;
