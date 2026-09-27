const express = require("express");

const {
  registerStudent,
  login,
} = require("../controllers/authController");

const router = express.Router();

// Register student
router.post("/register", registerStudent);

// Login
router.post("/login", login);

module.exports = router;