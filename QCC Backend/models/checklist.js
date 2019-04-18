var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ChecklistSchema = Schema({
  title: {type: String, required: true},
  tasks: [{type: String, required: true}],
  completed: {type: Boolean, required: true}
});


//Export model
module.exports = mongoose.model('Checklist', ChecklistSchema);
