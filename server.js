//Middleware
var express = require("express");
var bodyParser = require('body-parser');
var methodOveride = require('method-override');
// var mysql = require("mysql");

// Create instance of express app.
var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
    extened: false
}));
//override with POSThaving ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

var PORT = process.env.PORT || 8800;

app.listen(port);