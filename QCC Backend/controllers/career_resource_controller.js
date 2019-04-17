const ResourceModel = require("../models/career_resource.js");

module.exports = {
    getAll(req, res, next){
        ResourceModel.find({}, function(err, resource){
            if(err) res.send(err);
            res.send(resource);
        });
    },

    createResource(req, res, next){
        var resource = new ResourceModel(req.body);
        resource.save().then(doc => {
            res.send('Successfully added resource "' + resource.name + '"');
        }).catch(err => {
            res.send(err);
        });
    },

    deleteResource(req, res, next){
        ResourceModel.findOneAndDelete(req.body, function(err){
            if(err) res.send(err);
            res.send('Successfully deleted resource');
        })
    },

    updateResource(req, res, next){
        ResourceModel.findOneAndUpdate(req.body.searchCriteria, {$set: req.body.newData}, {new: true}, function(err, resource){
            if(err) console.log(err)
            res.send('Updated resource "' + resource.name + '"');
        });

    }
}
