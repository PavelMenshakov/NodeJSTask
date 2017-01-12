var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Posts' });
});

// router.post('/', function(req, res, next) {
  // res.send([req.title, req.text, req.author]);
// });
module.exports = router;
