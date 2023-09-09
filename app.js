const express = require("express");

const jobsRouter = require("./routes/jobsRouter");
const authRouter = require("./routes/authRouter");
const errorHandler = require("./middlewares/errorandler");
const authMiddleware = require("./middlewares/authMiddleware");

const connectDB = require("./db/connect");

const app = express();

require("express-async-errors");

require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use("/api/v1/jobs", authMiddleware, jobsRouter);
app.use("/api/v1/auth", authRouter);

app.use(errorHandler);
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log("server is listening on port:", PORT);
    });
  } catch (error) {
    console.log("error connecting to db", error);
  }
};

start();
