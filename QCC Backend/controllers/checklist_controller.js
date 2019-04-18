const ChecklistModel = require("../models/checklist.js");

module.exports = {
    getAll(req, res, next){
        ChecklistModel.find({}, function(err, checklists){
            if(err) res.send(err);
            res.send(checklists);
        });
    },

    createChecklist(req, res, next){
        var checklist = new ChecklistModel(req.body);
        checklist.save().then(doc => {
            res.send('Successfully added checklist "' +checklist.title + '"');
        }).catch(err => {
            res.send(err);
        });
    },

    deleteChecklist(req, res, next){
        ChecklistModel.findOneAndDelete(req.body, function(err){
            if(err) res.send(err);
            res.send('Successfully deleted checklist');
        })
    },

    updateChecklist(req, res, next){
        ChecklistModel.findOneAndUpdate(req.body.searchCriteria, {$set: req.body.newData}, {new: true}, function(err, checklist){
            if(err) console.log(err)
            res.send('Updated checklist "' + checklist.title + '"');
        });
    }
}
