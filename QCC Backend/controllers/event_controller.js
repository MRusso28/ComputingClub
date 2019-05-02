const EventModel = require("../models/event.js");

module.exports = {
    getAll(req, res, next){
        EventModel.find({}, function(err, events){
            if(err) res.send(err);
            res.send(events);
        });
    },

    createEvent(req, res, next){
        var event = new EventModel(req.body);
        event.save().then(doc => {
            res.send('Successfully added event "' + event.name + '"');
        }).catch(err => {
            res.send(err);
        });
    },

    deleteEvent(req, res, next){
        console.log(req.body);
        EventModel.findOneAndDelete(req.body, function(err){
            if(err) res.send(err);
            res.send('Successfully deleted event');
        })
    }, 

    updateEvent(req, res, next){
        EventModel.findOneAndUpdate(req.body.searchCriteria, {$set: req.body.newData}, {new: true}, function(err, event){
            if(err) console.log(err)
            res.send('Updated event "' + event.name + '"');
        });

    }
}