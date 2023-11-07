const Book = require("../../models/Book");

class getBook {
  async process(req, res) {
    try {
      let id = req.params.id;

      const book = await Book.find({ _id: id });

      if (book.length == 0) {
        throw "Book not found.";
      }

      res.status(200).json({
        type: "Success",
        data: book[0],
      });
    } catch (error) {
      res.status(400).json({
        type: "Error",
        error: error.error || error,
      });
    }
  }
}

module.exports = new getBook();
