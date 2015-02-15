var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    app = express();

app.use(favicon(__dirname + '/../app/img/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static files
// dev
app.use(express.static(path.join(__dirname, '../app')));
// dist
app.use('/dist', express.static(path.join(__dirname, '../dist')));

// Listen
app.listen(3000, function () {
    console.log('Listening on port 3000');
});

module.exports = app;
