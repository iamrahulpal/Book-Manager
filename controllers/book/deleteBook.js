const Book = require("../../models/Book");

class deleteBook {
  async checkBook(id) {
    try {
      let book = await Book.findOne({ _id: id });

      if (!book) {
        throw "Book doesn't exists.";
      }

      return "";
    } catch (error) {
      throw error;
    }
  }
  process = async (req, res) => {
    try {
      let id = req.params.id;

      await this.checkBook(id);

      const book = await Book.deleteOne({ _id: id });

      if (!book.deletedCount == 1) {
        throw "Failed to delete book.";
      }

      res.status(200).json({
        type: "Success",
        data: "Book has been deleted successfully",
      });
    } catch (error) {
      res.status(400).json({
        type: "Error",
        error: error.error || error,
      });
    }
  };
}

module.exports = new deleteBook();
