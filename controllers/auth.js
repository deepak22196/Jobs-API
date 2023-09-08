const { StatusCodes } = require("http-status-codes");

const register = (req, res) => {
  res.status(StatusCodes.OK).json({});
};

const login = (req, res) => {
  res.status(StatusCodes.OK).json({});
};

module.exports = { register, login };
