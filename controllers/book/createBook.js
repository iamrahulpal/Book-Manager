const Book = require("../../models/Book");
const validation = require("../../util/validate");
const schema = require("../../jsonSchema/book/createBook");

class createBook {
  process = async (req, res) => {
    try {
      validation(schema, req.body);
      const { title, author, summary } = req.body;

      const book = await Book.create({ title, author, summary });

      if (book.length == 0) {
        throw "Failed to create book.";
      }

      res.status(201).json({
        type: "Success",
        data: "Book added successfully.",
      });
    } catch (error) {
      res.status(400).json({
        type: "Error",
        error: error.error || error,
      });
    }
  };
}

module.exports = new createBook();
