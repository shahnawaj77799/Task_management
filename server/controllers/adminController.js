const AdminModel= require("../models/adminModel");
const transporter= require("../middleware/nodemailer");
const RandomPassword= require("../middleware/randompass");
const EmpModel= require("../models/employeeModel");
const TaskModel= require("../models/taskModel");

const adminLogin=async(req, res)=>{
    const {userid, password} = req.body;
    try {
        const Admin = await AdminModel.findOne({userid:userid});
        if (!Admin)
        {
            res.status(400).json({msg:"Invalid user Id"});
        }
        if(Admin.password!=password)
        {
            res.status(400).json({msg:"Invalid password"});
        }

        res.status(200).json(Admin)
    } catch (error) {
         console.log(error);
    }
      
}

const userCreate=async(req, res)=>{
    
   const  {username,designation,email} = req.body;
   const myPass= RandomPassword();
   

   const mailOptions = {
    from: "shahnawajali323@gmail.com", // Sender email
    to:email,                          // Recipient email
    subject:"Your Company Work Detail Account",                     // Email subject
    text:`Dear ${username} Your Account created with password : ${myPass} 
     You can login using with your Email account
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    const EmpData= await EmpModel.create({
      empname:username,
      designation:designation, 
      email:email,
      password:myPass
    })
    res.status(200).json({ success: true, message: 'Email sent', info });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}


const userDisplay=async(req, res)=>{
     try {
      const User= await EmpModel.find();
      res.status(200).send(User);
     } catch (error) {
         console.log(error);
     }
}


const taskAssignSave=async(req, res)=>{
  const { empid,tasktitle, taskdescription,  compdays} = req.body;
  
  try {
      const Employee = await TaskModel.create({
        tasktitle:tasktitle,
        taskdescription:taskdescription, 
        completiondays:compdays,
        empid:empid
      })

      res.status(200).send("Task Succesfully Assigned!");
  } catch (error) {
     console.log(error);
  }
}


const userReport=async(req, res)=>{
   try {
         const Task = await TaskModel.find().populate("empid");
         res.status(200).send(Task);
   } catch (error) {
      console.log(error);
   }
}


const taskReAssign=async(req, res)=>{
  const { taskid}= req.body;
  try {
       const Data= await TaskModel.findByIdAndUpdate(taskid, {empreport:'pending'})
       res.send({msg:"Task succesfully Re Assigned!"});
      } catch (error) {
     console.log(error);
  }
 
}

module.exports ={
    adminLogin,
    userCreate,
    userDisplay,
    taskAssignSave,
    userReport,
    taskReAssign
}