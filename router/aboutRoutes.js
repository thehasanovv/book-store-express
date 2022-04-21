const express = require('express');
const router = express.Router();
const AboutModel = require('.././models/aboutstoreModel');

router.get('/', (req,res) => {

    AboutModel.find({}).sort({$natural: -1}).lean().then(about => {
        res.render('site/aboutstore', {about: about});
    })
    
})


module.exports = router;