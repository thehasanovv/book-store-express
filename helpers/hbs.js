const BooksModel = require('../models/bookModel');

module.exports = {
  uniqueList: () => BooksModel.find({ bookType }).then((type) => type),
};
