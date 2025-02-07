const express= require("express");
const route= express.Router();
const empController= require("../controllers/employeeController");

route.post("/employeelogin", empController.emploginCheck);
route.post("/employeetaskdisplay", empController.empTaskDisplay);
route.post("/employeetasksubmit", empController.empTaskSubmit);

route.post("/changepass",empController.ChangePassword);

module.exports =route;
