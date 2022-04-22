const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const BooksModel = require('../models/bookModel');
const CategoryModel = mongoose.Collection('categories')



router.get('/', (req, res) => {
  BooksModel.find({})
    .lean()
    .then((book) => {
      CategoryModel.find({}).lean().then(category => {
        res.render('site/catalog', { book, category });

      })

    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  BooksModel.findOne({ _id: id })
    .lean()
    .then((book) => {
      res.render('site/readmore', { book });
      console.log(book);
    });
});

router.get('/:name', (req, res) => {
  BooksModel.find({bookType: req.params.name}).lean().then(filterBook => {
    res.render('site/catalog',{filterBook})
    console.log(filterBook);
  })
})

module.exports = router;
