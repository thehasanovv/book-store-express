const express = require('express');
const router = express.Router();
const User = require('../../models/userModel');
const ContactModel = require('../../models/contactModel');
const AboutModel = require('../../models/aboutstoreModel');
const BookModel = require('../../models/bookModel');


router.get('/', (req, res) => {
    if(!req.session.userId) {
        res.redirect('/admin/login')
    }
    else {
        User.find({}).sort({ $natural: -1 }).lean()
        .then(user => {
            ContactModel.find({}).sort({ $natural: -1 }).lean()
                .then(contact => {
                    res.render('site/admin', { layout: false, user: user, contact:contact })
                })
        })
    }
});

router.post('/aboutstore', async (req, res) => {
    try {
        const newBook = await AboutModel.create(req.body); 
    }
    catch(err) {
        console.log(err);
    }
    res.redirect('/admin');
});

router.post('/newbook', async (req, res) => {
    try {
        const newBook = await BookModel.create(req.body); 
    }
    catch(err) {
        console.log(err);
    }
    res.redirect('/admin');
})


router.get('/login', (req, res) => {
    res.render('site/adminlogin', { layout: false })
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email }, (err, user) => {

        if (user) {
            if (user.password === password) {
                req.session.userId = user._id;
                res.redirect('/admin');
            } else {
                res.end('Wrong password');
            }
        }
        else {
            res.redirect('/admin/login')
        }

    });
});


router.get('/logout', (req, res) => {
    req.session.destroy(() => res.redirect('/admin/login'))
})
module.exports = router;