const express = require("express");
const router = express.Router();
const event_controller = require("../controllers/event_controller.js");

router.route("/events")
.all((req,res,next)=>{
    next();
})
.post(event_controller.createEvent);//Public

module.exports = router;
