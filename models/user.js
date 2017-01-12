var express = require('express');

var userModel = function(Post) {
	addPost = function(title, text, author) {
		var newPost = new Post({ title: title, text: text, author: author });
		return newPost.save(function(err, docs) {
			if(err) console.log(err);

			console.log(docs);
			return docs;
		});
	},
	getPost = function(title) {
		console.log('title = ' + title);
		return Post.find(title ? { title: title } : {}, function(err, docs) {
			if(err) console.log(err);

			console.log(docs);
			return docs;
		});
	},
	removePost = function(title) {
		return Post.remove({ title: title }, function(err, docs) {
			if(err) console.log(err);

			console.log(docs);
			return docs;
		});
	}
	return {
		addPost: addPost,
		getPost: getPost,
		removePost: removePost
	}
};

module.exports = userModel;