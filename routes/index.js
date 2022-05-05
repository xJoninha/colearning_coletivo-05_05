var express = require('express');
var router = express.Router();
const dados = require('../models/produtos');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { produtos: dados });
});

module.exports = router;