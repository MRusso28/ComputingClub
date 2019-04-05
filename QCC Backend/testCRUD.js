var mongoose = require('mongoose');
var mongodb = 'mongodb+srv://qccAdmin:qccAdmin@cluster0-gmda3.mongodb.net/qccDB?retryWrites=true';

mongoose.connect(mongodb, { useNewUrlParser: true });

//Get the default connection if we need it later
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//require all models
var StudentModel = require('./models/student.js');
var EventModel = require('./models/event.js')
var CareerResourceModel = require('./models/career_resource.js')
var ChecklistModel = require('./models/checklist.js')



/////////////////////////////////////////////////////////////////
//Each test will save, query, update, and delete, in that order//
//Functions are nested to ensure they fire in the correct order//
/////////////////////////////////////////////////////////////////



//////////////////////TESTING STUDENT CRUD//////////////////////
//create new student
var student = new StudentModel({
    name: 'Brandon Loehle',
    gradYear: 2019,
    password: 'abc123',
    approved: true,
    officer: true
});

//insert a new student
student.save().then(doc => {
    console.log('Saved: ' + doc);

    //find that student
    StudentModel.find({'name':'Brandon Loehle'}, function(err, students){
        if(err) console.log(err)
        console.log('Found: ' + students);
        
        //update that student
        StudentModel.findOneAndUpdate({'name':'Brandon Loehle'}, {$set: {'name':'Brandon Thomas Loehle'}},  {new:true}, function(err, student){
            if(err) console.log(err)
            console.log('Updated: to' + student);
    
            //delete that student
            StudentModel.findOneAndDelete({'name':'Brandon Thomas Loehle'}, function(err){
                if(err) console.log(err);
                console.log('Sucessfully deleted student');
            });
        });
    });



}).catch(err => {
    console.log(err);
});

//////////////////////TESTING EVENT CRUD//////////////////////
//create new event
var event = new EventModel({
    name: 'Hackathon',
    desc: 'Spring Hackathon',
    datetime: new Date('April 6, 2019 09:30:00'),
    location: 'CCE-030'
});

//insert a new event
event.save().then(doc => {
    console.log('Saved: ' + doc);

    //find that event
    EventModel.find({'name':'Hackathon'}, function(err, events){
        if(err) console.log(err)
        console.log('Found: ' + events);

        //update that event
        EventModel.findOneAndUpdate({'name':'Hackathon'}, {$set: {'name':'The Hackathon'}},  {new:true}, function(err, event){
            if(err) console.log(err)
            console.log('Updated: to' + event);

            //delete that event
            EventModel.findOneAndDelete({'name':'The Hackathon'}, function(err){
                if(err) console.log(err);
                console.log('Sucessfully deleted event');
            });
        });
    });



}).catch(err => {
    console.log(err);
});

//////////////////////TESTING CAREER RESOURCE CRUD//////////////////////
//create new career resource
var careerRes = new CareerResourceModel({
    name: 'Find Internships',
    desc: 'Learn how to locate potential Software Engineering internships',
    link: 'www.google.com'
});

//insert a new career resource
careerRes.save().then(doc => {
    console.log('Saved: ' + doc);

    //find that career resource
    CareerResourceModel.find({'name':'Find Internships'}, function(err, crs){
        if(err) console.log(err)
        console.log('Found: ' + crs);

        //update that career resource
        CareerResourceModel.findOneAndUpdate({'name':'Find Internships'}, {$set: {'link':'www.indeed.com'}},  {new:true}, function(err, cr){
            if(err) console.log(err)
            console.log('Updated: to' + cr);
    
            //delete that career resource
            CareerResourceModel.findOneAndDelete({'name':'Find Internships'}, function(err){
                if(err) console.log(err);
                console.log('Sucessfully deleted career resource');
            });
        });
    });



}).catch(err => {
    console.log(err);
});

//////////////////////TESTING CHECKLIST CRUD//////////////////////
//create new checklist
var checklist = new ChecklistModel({
    title: 'Study Hall',
    tasks: ['Order the food', 'Post to FB', 'Post to Discord'],
    completed: false
});

//insert a new checklist
checklist.save().then(doc => {
    console.log('Saved: ' + doc);

    //find that checklist
    ChecklistModel.find({'title':'Study Hall'}, function(err, checklists){
        if(err) console.log(err)
        console.log('Found: ' + checklists);
        
        //update that checklist
        ChecklistModel.findOneAndUpdate({'title':'Study Hall'}, {$set: {'completed':'true'}},  {new:true}, function(err, checklist){
            if(err) console.log(err)
            console.log('Updated: to' + checklist);
    
            //delete that checklist
            ChecklistModel.findOneAndDelete({'title':'Study Hall'}, function(err){
                if(err) console.log(err);
                console.log('Sucessfully deleted checklist');
            });
        });
    });



}).catch(err => {
    console.log(err);
});




