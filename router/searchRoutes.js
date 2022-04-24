const express = require("express");
const router = express.Router();
const BooksModel = require('../models/bookModel')

router.get("/", (req, res) => {
  res.render("site/search");
});

router.post('/', async (req, res) => {
  const bookName = req.body.search;
  const books = await BooksModel.aggregate([{$match: {bookName}}]);
  console.log(books);
  res.render('site/search', {books});
})

module.exports = router;
