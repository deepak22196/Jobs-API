const express = require("express");

const jobsRouter = require("./routes/jobsRouter");
const authRouter = require("./routes/authRouter");

const connectDB = require("./db/connect");

const app = express();

require("express-async-errors");

require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use("/api/v1/jobs", jobsRouter);
app.use("/api/v1/auth", authRouter);

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
