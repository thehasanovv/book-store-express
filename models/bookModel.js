const mongoose = require('mongoose');

const bookModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    author: {
        type: String,
        required: [true, 'Author Name is required'],
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
        trim: true,
    },

    type: {
        type: String,
        required: [true, 'Book Type is required'],
        trim: true,
    },

    year: {
        type: Number,
        required: [true, 'Year is required'],
    },
});

module.exports = mongoose.model('Book', bookModelSchema);
