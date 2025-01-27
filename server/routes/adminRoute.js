const express= require("express");
const route= express.Router();
const AdminController = require("../controllers/adminController");

route.post("/adminlogin", AdminController.adminLogin);

route.post("/usercreate", AdminController.userCreate);

route.get("/assigntaskdisplay", AdminController.userDisplay);
route.post("/assigntask", AdminController.taskAssignSave);

module.exports =route;
