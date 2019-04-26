var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EventSchema = Schema({
  name: {type: String, required: true},
  headline: {type: String, required: true},
  desc: {type: String, required: true},
  datetime: {type: Date, required: true},
  location: {type: String, required: true},
  showDesc: false
});


//Export model
module.exports = mongoose.model('Event', EventSchema);