const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [25, 'Name must have less or equal than 25 characters'],
    minlength: [6, 'Name must have more or equal than 6 characters'],
  },
  surname: {
    type: String,
    required: [true, 'Surname is required'],
    trim: true,
    maxlength: [25, 'Name must have less or equal than 25 characters'],
    minlength: [6, 'Name must have more or equal than 6 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: [validator.isEmail, 'Please enter a valid email'],
  },
  phone: {
    type: String,
    required: [true, 'Number is required'],
  },
});

module.exports = mongoose.model('Contact', contactSchema);
