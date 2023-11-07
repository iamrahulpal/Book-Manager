const express = require("express");
const router = express.Router();

router.post("/signup", require("../controllers/user/signup").process); // Register User
router.get("/login", require("../controllers/user/login").process); // Login User


module.exports = router;
