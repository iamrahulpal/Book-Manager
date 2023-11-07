const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticateUser");

router.post(
  "/",
  authenticate,
  require("../controllers/book/createBook").process
); // Create Book

module.exports = router;
