const Book = require("../../models/Book");

class getAllBook {
  async process(req, res) {
    try {
      const books = await Book.find().sort({ timestamp: -1 });

      if (books.length == 0) {
        throw "Books not found";
      }

      res.status(200).json({
        type: "Success",
        data: books,
      });
    } catch (error) {
      res.status(400).json({
        type: "Error",
        error: error.error || error,
      });
    }
  }
}

module.exports = new getAllBook();
