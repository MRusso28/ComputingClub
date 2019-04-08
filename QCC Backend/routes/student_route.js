const express = require("express");
const router = express.Router();
const student_controller = require("../controllers/student_controller.js");
const passport = require('passport');
const auth = require('./auth');
const StudentModel = require("../models/student.js");

router.route("/students")
.all((req,res,next)=>{
    next();
})
.get(student_controller.getAll)//get all students
.put(student_controller.updateStudent)//update an student
.delete(student_controller.deleteStudent)//delete an student
.post(student_controller.addStudent);//post a new student

//POST new user route (optional, everyone has access)
router.post('/students/auth', auth.optional, (req, res, next) => {
    const { body: { user } } = req;
  
    if(!user.email) {
      return res.status(422).json({
        errors: {
          email: 'is required',
        },
      });
    }
  
    if(!user.password) {
      return res.status(422).json({
        errors: {
          password: 'is required',
        },
      });
    }
  
    const finalUser = new StudentModel(user);
  
    finalUser.setPassword(user.password);
  
    return finalUser.save()
      .then(() => res.json({ user: finalUser.toAuthJSON() }));
  });
  
  //POST login route (optional, everyone has access)
  router.post('/students/auth/login', auth.optional, (req, res, next) => {
    const { body: { user } } = req;
  
    if(!user.email) {
      return res.status(422).json({
        errors: {
          email: 'is required',
        },
      });
    }
  
    if(!user.password) {
      return res.status(422).json({
        errors: {
          password: 'is required',
        },
      });
    }
  
    return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
      if(err) {
        return next(err);
      }
  
      if(passportUser) {
        const user = passportUser;
        user.token = passportUser.generateJWT();
  
        return res.json({ user: user.toAuthJSON() });
      }
  
      return status(400).info;
    })(req, res, next);
  });
  
  //GET current route (required, only authenticated users have access)
  router.get('/students/auth/current', auth.required, (req, res, next) => {
    const { payload: { id } } = req;
  
    return StudentModel.findById(id)
      .then((user) => {
        if(!user) {
          return res.sendStatus(400);
        }

        console.log(user);
  
        return res.json({ user: user.toAuthJSON() });
      });
  });
  

module.exports = router;
