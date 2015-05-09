var express = require('express');
var router = express.Router();
var mongo = require('mongodb'),
	assert = require('assert');
var MongoClient = mongo.MongoClient;

var url = 'mongodb://localhost:27017/pingeet';
var wdb = null;
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  wdb = db;
  console.log("Connected correctly to server");
});

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Pingeet' });
};

router.post('/login', function(req, res) {
	console.log(req.body.login);
	console.log(req.body.password);

	wdb.collection('users').find({
		login:req.body.login, 
		password:req.body.password
	}).toArray(function(err, user) {
		if (err != null) {
			console.log("Erreur pendant la requete sur l'utilisateur!");
			console.log(err);
			return;
		} else if (user.length != 1) {
			console.log("l'utilisateur n'a pas été trouvé !");
			res.render('new_user');
		} else {
			console.log("l'utilisateur a été trouvé !");
			res.render('home', {login:req.body.login, login_id:user[0]._id});
		}
		
	});
});

router.post('/create', function(req, res) {
	console.log(req.body.login);
	console.log(req.body.password);

	wdb.collection('users').find({login:req.body.login, password:req.body.password}).toArray(function(err, user) {
		if (err != null) {
			console.log("Erreur pendant la requete sur l'utilisateur!");
			console.log(err);
			return;
		} else if (user.length != 1) {
			console.log("l'utilisateur n'a pas été trouvé !");
			var user = {_id: mongo.ObjectID.createPk(), login:req.body.login, password:req.body.password};
			wdb.collection('users').insert([user], function(err, result) {
				if (err != null)
					console.log(err);
				console.log("L'utilisateur a été ajouté en BDD !")
				res.render('home', {login:req.body.login, login_id:user._id});
			});
		} else {
			console.log("l'utilisateur a été trouvé !");
			res.render('home', {login:req.body.login, login_id:user[0]._id});
		}
		
	});
});

module.exports = router;