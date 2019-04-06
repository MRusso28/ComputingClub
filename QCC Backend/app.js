const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

app.use(bodyParser.json());

const event_router = require("./routes/event_route.js");
app.use("/", event_router); //before sending requests to static files, we first check if they are valid API requests. 



app.listen(port, ()=> console.log(` Server listening on port ${port}!`));