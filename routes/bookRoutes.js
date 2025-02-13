const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticateUser");

router.post("/", require("../controllers/book/createBook").process); // Create Book
router.get("/", require("../controllers/book/getAllBook").process); // Get all book
router.get("/:id", require("../controllers/book/getSingleBook").process); // Get single book
router.put("/:id", require("../controllers/book/updateBook").process); // Update book
router.delete("/:id", require("../controllers/book/deleteBook").process); // Delete book

module.exports = router;
