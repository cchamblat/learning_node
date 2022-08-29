const express = require('express');
const router = express.Router();
const {registerForm, loginForm, registerUser} = require("../controllers/authController");


router.get("/login", loginForm)

router.get("/register", registerForm);

router.post("/register", registerUser);

module.exports = router;