const express = require('express');
const router = express.Router();

// router.get('/', (req,res) => {
//     res.render('catalog');
// })

router.route('/', (req,res) => {
    res.render('catalog');
})


module.exports = router;