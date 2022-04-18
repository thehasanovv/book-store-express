const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(req.session);
  User.findOne({ email }, (err, user) => {
    if(user){
      if (user.password === password) {
        req.session.userId = user._id;
        res.redirect('/');
      } else {
        res.end('Wrong password');
      }
    }
    else {
      res.redirect('/')
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

router.get('/logout', (req,res)=> {
  req.session.destroy(()=> res.redirect('/'))
})

module.exports = router;
