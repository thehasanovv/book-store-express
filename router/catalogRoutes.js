const express = require('express');
const router = express.Router();
const BooksModel = require('../models/bookModel');

router.get('/type/:id', async (req, res) => {
  const bookType = req.params.id;
  let books;

  if (bookType === 'all') {
    books = BooksModel.find().lean();
  } else {
    books = BooksModel.aggregate([{ $match: { bookType } }]);
  }
  const book = await books;

  res.render('site/catalog', { book });
});

router.get('/', (req, res) => {
  BooksModel.find({})
    .lean()
    .then((book) => {
      let bookType = book.map((item) => item.bookType);

      let uniqueTypes = [...new Set(bookType)];
      res.render('site/catalog', { book, uniqueTypes });
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  BooksModel.findOne({ _id: id })
    .lean()
    .then((book) => {
      res.render('site/readmore', { book });
    });
});

module.exports = router;
