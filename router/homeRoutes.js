const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('site/index');
    // res.send('Salam')
    // res.end();
})


module.exports = router;