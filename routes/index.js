var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index.html');
    // res.send('Index Page');
});

module.exports = router;