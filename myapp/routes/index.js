var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'wpm' });
});
router.get('/angular', function(req, res, next) {
  res.render('index', { title: 'wpm -mean' });
});

module.exports = router;
