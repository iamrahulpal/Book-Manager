const Book = require("../../models/Book");

class getAllBook {
  async process(req, res) {
    try {
      console.log("Get all book");
      const books = await Book.find().sort({ timestamp: -1 });
      console.log("🚀 ~ books:::", books);

      if (books === null) {
        throw "Failed to get books.";
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
