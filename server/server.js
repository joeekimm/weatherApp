var express = require('express');
var routes = require('../config/routes');
// var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var db = require("../config/database");

var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '../client')));

app.use('/', routes);

app.listen(8080);


module.exports = app;