const event = require("../models/event.js");
const express = require("express");

module.exports = {
    getAll(req, res, next){

    },

    createEvent(req, res, next){
        var data = req.body;
        console.log(data);
        res.send(data);


    },

    deleteEvent(req, res, next){

    }, 

    updateEvent(req, res, next){

    }
}