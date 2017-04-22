var mongoose = require('mongoose');

var dbUri = 'mongodb://user:user@ds062059.mlab.com:62059/practiceproject';



var db = mongoose.connect(dbUri);

module.exports = db;

