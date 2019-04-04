var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StudentSchema = Schema({
  name: {type: String, required: true},
  gradYear: {type: Number, required: true},
  password: {type: String, required: true},
  officer: {type: Boolean, required: true}
});


//Export model
module.exports = mongoose.model('Student', StudentSchema);