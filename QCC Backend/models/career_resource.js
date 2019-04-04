var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CareerResourceSchema = Schema({
  name: {type: String, required: true},
  desc: {type: String, required: true},
  link: {type: String, required: false}
});


//Export model
module.exports = mongoose.model('Career_Resource', CareerResourceSchema);