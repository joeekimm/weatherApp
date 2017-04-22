var mongoose = require('mongoose');
var Weather = require('../models/weather');

var index = {
  get: function(req, res, next){
    Weather.find({}, function(err, weathers){
      if(err){res.json(err)};
      res.json(weathers);
    });
  },
  post: function(req,res) {
    var newWeather = new Weather(req.body);
    newWeather.save(function(err) {
      if(err) {
        console.log('Err: ', err);
        res.status(404);
      } else {
        console.log('POST SUCCESS');
        res.status(201);
        res.json({
          
        })
      }
    })
  }
}






module.exports = {
  index: index
};