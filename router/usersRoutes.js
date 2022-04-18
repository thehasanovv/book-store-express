const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (user.password === password) {
      res.redirect('/');
    } else {
      res.end('Wrong password');
    }
  });
});

router.post('/register', async (req, res) => {
  try {
    let newUser = await User.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect('/');
});

module.exports = router;
