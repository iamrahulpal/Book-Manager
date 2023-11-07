const Book = require("../../models/Book");
const validation = require("../../util/validate");
const schema = require("../../jsonSchema/book/updateBook");

class updateBook {
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
      validation(schema, req.body);
      let id = req.params.id;
      let updateBook = req.body;

      let response = await this.checkBook(id);

      const book = await Book.updateOne({ _id: id }, updateBook);

      if (!book.modifiedCount == 1) {
        throw "Failed to update book.";
      }

      res.status(200).json({
        type: "Success",
        data: "Book has been updated successfully",
      });
    } catch (error) {
      res.status(400).json({
        type: "Error",
        error: error.error || error,
      });
    }
  };
}

module.exports = new updateBook();
