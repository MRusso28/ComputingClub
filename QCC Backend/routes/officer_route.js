const express = require("express");
const router = express.Router();
const officer_controller = require("../controllers/officer_controller.js");
const passport = require('passport');
const auth = require('./auth');
const OfficerModel = require("../models/officer.js");

router.route("/officers")
.all((req,res,next)=>{
    next();
})
.get(officer_controller.getAll)//get all officers
.put(officer_controller.updateOfficer)//update an officer
.delete(officer_controller.deleteOfficer)//delete an officer
.post(officer_controller.addOfficer);//post a new officer

//POST new user route (optional, everyone has access)
router.post('/officer/auth', auth.optional, (req, res, next) => {
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

    const finalUser = new OfficerModel(user);

    finalUser.setPassword(user.password);

    return finalUser.save()
      .then(() => res.json({ user: finalUser.toAuthJSON() }));
  });

  //POST login route (optional, everyone has access)
  router.post('/officer/auth/login', auth.optional, (req, res, next) => {
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
  router.get('/officer/auth/current', auth.required, (req, res, next) => {
    const { payload: { id } } = req;

    return OfficerModel.findById(id)
      .then((user) => {
        if(!user) {
          return res.sendStatus(400);
        }

        console.log(user);

        return res.json({ user: user.toAuthJSON() });
      });
  });


module.exports = router;
