const express = require('express');
const ContactModel = require('./../models/contactModel');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('site/contactus');
});

router.post('/', async (req, res) => {
  try {
    const newContact = await ContactModel.create(req.body);
  } catch (err) {
    console.log(err.message);
  }
  res.redirect('/contact');
});

// router.post('/', (req, res) => {
//   ContactModel.create(req.body, (err, contact) => {
//     res.redirect('/contact');
//   });
// });

module.exports = router;
