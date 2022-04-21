const mongoose = require('mongoose');

const aboutStoreSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
  },
  imgUrl: {
    type: String,
    required: [true, 'Image URL is required'],
    trim: true,
  },
  
  desc: {
    type: String,
    required: [true, 'Description is required'],
  },
});

module.exports = mongoose.model('About', aboutStoreSchema);
