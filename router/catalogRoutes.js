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

router.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  BooksModel.findOne({ _id: id })
    .lean()
    .then((book) => {
      res.render('site/readmore', { book });
      console.log(book);
    });
});

module.exports = router;
