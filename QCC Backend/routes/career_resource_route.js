const express = require("express");
const router = express.Router();
const career_controller = require("../controllers/career_resource_controller.js");

router.route("/careerResource")
.all((req,res,next)=>{
    next();
})
.get(career_controller.getAll)//get all career
.put(career_controller.updateResource)//update an career
.delete(career_controller.deleteResource)//delete an career
.post(career_controller.createResource);//post a new career

module.exports = router;
