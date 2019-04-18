const express = require("express");
const router = express.Router();
const checklist_controller = require("../controllers/checklist_controller.js");

router.route("/checklist")
.all((req,res,next)=>{
    next();
})
.get(checklist_controller.getAll)//get all checklists
.put(checklist_controller.updateChecklist)//update a checklist
.delete(checklist_controller.deleteChecklist)//delete a checklist
.post(checklist_controller.createChecklist);//post a new checklist

module.exports = router;
