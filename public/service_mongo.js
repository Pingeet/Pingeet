var mongo = require('mongodb'),
	assert = require('assert');
var MongoClient = mongo.MongoClient;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var url = 'mongodb://localhost:8080/';
var wdb = null;
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  wdb = db;
  console.log("Connected correctly to server");
});