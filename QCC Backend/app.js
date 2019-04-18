const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
var cors = require('cors');
require('./config/passport');

var mongoose = require('mongoose');
var mongodb = 'mongodb+srv://qccAdmin:qccAdmin@cluster0-gmda3.mongodb.net/qccDB?retryWrites=true';

mongoose.connect(mongodb, { useNewUrlParser: true });

//Get the default connection if we need it later
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors()) // Use this after the variable declaration

app.use(bodyParser.json());

const event_router = require("./routes/event_route.js");
const student_router = require("./routes/student_route.js");
const checklist_router = require("./routes/checklist_route.js");
app.use("/", event_router); //before sending requests to static files, we first check if they are valid API requests.
app.use("/", student_router);
app.use("/", checklist_router);


app.listen(port, ()=> console.log(` Server listening on port ${port}!`));
