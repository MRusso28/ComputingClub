const express = require("express");
const router = express.Router();
const student_controller = require("../controllers/student_controller.js");

router.route("/students")
.all((req,res,next)=>{
    next();
})
.get(student_controller.getAll)//get all students
.put(student_controller.updateStudent)//update an student
.delete(student_controller.deleteStudent)//delete an student
.post(student_controller.addStudent);//post a new student

module.exports = router;
