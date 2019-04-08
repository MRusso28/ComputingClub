const StudentModel = require("../models/student.js");

module.exports = {
    getAll(req, res, next){
        StudentModel.find({}, function(err, events){
            if(err) res.send(err);
            res.send(events);
        });
    },

    addStudent(req, res, next){
        var student = new StudentModel(req.body);
        student.save().then(doc => {
            res.send('Successfully added student "' + student.name + '"');
        }).catch(err => {
            res.send(err);
        });
    },

    deleteStudent(req, res, next){
        StudentModel.findOneAndDelete(req.body, function(err){
            if(err) res.send(err);
            res.send('Successfully deleted student');
        })
    }, 

    updateStudent(req, res, next){
        StudentModel.findOneAndUpdate(req.body.searchCriteria, {$set: req.body.newData}, {new: true}, function(err, student){
            if(err) console.log(err)
            res.send('Updated student "' + student.name + '"');
        });

    }
}