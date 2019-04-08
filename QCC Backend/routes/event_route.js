const express = require("express");
const router = express.Router();
const event_controller = require("../controllers/event_controller.js");

router.route("/events")
.all((req,res,next)=>{
    next();
})
.get(event_controller.getAll)//get all events
.put(event_controller.updateEvent)//update an event
.delete(event_controller.deleteEvent)//delete an event
.post(event_controller.createEvent);//post a new event

module.exports = router;
