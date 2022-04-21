const express = require('express');
const router = express.Router();
const BooksModel = require('../models/bookModel');

router.get('/', (req, res) => {
  BooksModel.find({})
    .lean()
    .then((book) => {
      res.render('site/catalog', { book });
    });
});

module.exports = router;
