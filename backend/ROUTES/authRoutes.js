const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getProfile
 
} = require("../CONTROLLERS/auth.controller");

const authMiddleware = require("../MIDDLEWARE/authMiddleware");


// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// get PROFILE
router.get(
  "/profile", authMiddleware,getProfile)
 

module.exports = router;
