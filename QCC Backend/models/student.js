var mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
var Schema = mongoose.Schema;



var StudentSchema = Schema({
  name: {type: String, required: true},
  gradYear: {type: Number, required: true},
  email: String,
  hash: String,
  salt: String,
  approved: {type: Boolean, require: true},
  officer: {type: Boolean, required: true}
});


StudentSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

StudentSchema.methods.validatePassword = function(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

StudentSchema.methods.generateJWT = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    email: this.email,
    id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10),
  }, 'secret');
}

StudentSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    email: this.email,
    token: this.generateJWT(),
  };
};

//Export model
module.exports = mongoose.model('Student', StudentSchema);