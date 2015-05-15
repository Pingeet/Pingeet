/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');

var routes = require('./routes/index');

var app = express();
//gestion de la DB 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pingeet');
var persoSchema = mongoose.Schema({
    login: {type: String},
    password: {type: String}
});
var Perso = mongoose.model('Perso', persoSchema);
// all environments
//app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes);

app.post('/create', function (req, res) {
    //création d'un nouveau document destiné à la DB 
    var nouveauPerso = new Perso({
        login: req.body.login,
        password: req.body.password
    });
    //enregistrement dans la DB 
    nouveauPerso.save(function (err) {
        if (err) {
            res.send('err');
        }
        else {
            res.send();
        }
    })
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;