var express = require('express');
var router = express.Router();
var calc = require('../public/calc');

router.get('/', function(req, res, next) {
    res.json(calc);
});

module.exports = router;