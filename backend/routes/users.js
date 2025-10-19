const express = require('express');
const router = express.Router();

const { getUser, signupUser, loginUser } = require('../controllers/UserController');

// GET user
router.get("/:user_id", getUser);

// Signup user
router.post("/signup", signupUser);

// Signup user
router.post("/login", loginUser);

module.exports = router;