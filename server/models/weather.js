var mongoose = require('mongoose');

var weatherSchema = new mongoose.Schema({
  city_name: String,
  weather: String,
  temperature: Number
});


var Weather = mongoose.model('Weather', weatherSchema);


module.exports = Weather;