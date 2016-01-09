var express = require('express');
var secret_santa = require('./secretSanta')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {matches : secret_santa.getSecretSanta('names.txt')});
});

module.exports = router;
