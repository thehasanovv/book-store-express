const User = require('../models/userModel');

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user.password === password) {
      req.session.userId = user._id;
      res.redirect('/');
    } else {
      res.end('Wrong password');
    }
  } catch (err) {
    console.log(err);
  }
};

exports.createUser = async (req, res) => {
  try {
    let newUser = await User.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect('/');
};

exports.logOut = async (req, res) => {
  req.session.destroy(() => res.redirect('/'));
};
