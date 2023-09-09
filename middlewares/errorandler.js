const errorHandler = async (error, req, res, next) => {
  console.log("inside error handler");
  res.status(500).json({ message: "internal server error" });
};

module.exports = errorHandler;
