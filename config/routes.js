var express = require('express');
var router = require('express').Router();

var weatherController = require('../server/controllers/weather');

router.get('/', weatherController.index.get);
router.post('/weather', weatherController.index.post);


module.exports = router;