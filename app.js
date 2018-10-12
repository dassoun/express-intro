var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// Configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use middleware
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use(require('./todos'));

// Start the server
app.listen(1337, function () {
    console.log('Ready on port 1337');
});
