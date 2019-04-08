
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const StudentModel = require("../models/student.js");

passport.use(new LocalStrategy({
  usernameField: 'user[email]',
  passwordField: 'user[password]',
}, (email, password, done) => {
    StudentModel.findOne({ email })
    .then((student) => {
      if(!student || !student.validatePassword(password)) {
        return done(null, false, { errors: { 'email or password': 'is invalid' } });
      }

      return done(null, student);
    }).catch(done);
}));