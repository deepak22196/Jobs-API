const express = require("express");

const router = express.Router();

const { registerSampleUsers, login, register } = require("../controllers/auth");

router.get("/createSample", registerSampleUsers);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
