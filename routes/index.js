var express = require('express');
var router = express.Router();
var mongoUser = require('./userM.js');
/*
 * GET home page.
 */

router.get('/', function(req, res, next){
  res.render('index');
});

mongoUser.userM();
module.exports = router;