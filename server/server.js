var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(favicon(__dirname + '/../app/img/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static files
app.use(express.static(path.join(__dirname, '../app')));

// Listen
app.listen(3000, function () {
    console.log('Listening on port 3000');
});

module.exports = app;
