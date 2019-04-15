const OfficerModel = require("../models/officer.js");

module.exports = {
    getAll(req, res, next){
        OfficerModel.find({}, function(err, events){
            if(err) res.send(err);
            res.send(events);
        });
    },

    addOfficer(req, res, next){
        var officer = new OfficerModel(req.body);
        officer.save().then(doc => {
            res.send('Successfully added officer "' + officer.name + '"');
        }).catch(err => {
            res.send(err);
        });
    },

    deleteOfficer(req, res, next){
        OfficerModel.findOneAndDelete(req.body, function(err){
            if(err) res.send(err);
            res.send('Successfully deleted officer');
        })
    },

    updateOfficer(req, res, next){
        OfficerModel.findOneAndUpdate(req.body.searchCriteria, {$set: req.body.newData}, {new: true}, function(err, officer){
            if(err) console.log(err)
            res.send('Updated officer "' + officer.name + '"');
        });

    }
}
