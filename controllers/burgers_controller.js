var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
    burgers.all(function(data) {
        var hbsObject = { burgers: data };
        console.log();
    })
})