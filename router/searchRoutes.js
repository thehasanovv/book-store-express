const express = require('express');
const router = express.Router();
const BooksModel = require('../models/bookModel');

router.get('/', (req, res) => {
  res.render('site/search');
});

router.post('/', async (req, res) => {
  const bookName = req.body.search;
  let regex = new RegExp(`^${bookName}`, 'ig');
  const books = await BooksModel.aggregate([{ $match: { bookName: regex } }]);
  // const books = await BooksModel.find({
  //   bookName: { $regex: /Harry$/, $match: 'Harry' },
  // });

  console.log(books);
  res.render('site/search', { books });
});

module.exports = router;
