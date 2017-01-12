var express = require('express');
var models = require('../models/user');
var multer = require('multer'); // v1.0.5
var upload = multer();

var router = express.Router();
var mongoose = require('mongoose');
var post = mongoose.model('Post', { title: 'String', text: 'String', author: 'String' });


/* GET users listing. */
router.get('/:title', function(req, res, next) {
	models(post).getPost(req.params.title).then(function(result) {
		res.send(result); 
	  });	  
});

router.get('/', function(req, res, next) {
  models(post).getPost().then(function(result) {
		res.send(result); 
	  });
});

router.post('/', upload.array(), function(req, res, next) {
  models(post).addPost(req.body.title, req.body.text, req.body.author).then(function(result) {
	res.send(req.body); 
  }); 
});

module.exports = router;
