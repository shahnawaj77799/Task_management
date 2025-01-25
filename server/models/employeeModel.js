
const mongoose= require("mongoose");
const empSchema=new mongoose.Schema({ 
    empname:String,
    designation:String, 
    email:String,
    password:String
})

module.exports = mongoose.model("employee", empSchema);