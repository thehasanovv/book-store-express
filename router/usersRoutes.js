const express = require('express');
const router = express.Router();
const userControllers = require('./../controllers/userController');

router.route('/login').post(userControllers.loginUser);
router.route('/register').post(userControllers.createUser);
router.route('/logout').get(userControllers.logOut);

module.exports = router;

// const User = require('../models/userModel');

// router.post('/login', (req, res) => {
//   const { email, password } = req.body;
//   User.findOne({ email }, (err, user) => {
//     if (user) {
//       if (user.password === password) {
//         req.session.userId = user._id;
//         res.redirect('/');
//       } else {
//         res.end('Wrong password');
//       }
//     } else {
//       res.redirect('/');
//     }
//   });
// });

// router.post('/register', async (req, res) => {
//   try {
//     let newUser = await User.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.redirect('/');
// });

// router.get('/logout', (req, res) => {
//   req.session.destroy(() => res.redirect('/'));
// });
