const EmpModel= require("../models/employeeModel");
const TaskModel= require("../models/taskModel");

const emploginCheck=async(req, res)=>{
    const { userid, password} = req.body;
    try {
        const Employee = await EmpModel.findOne({email:userid});
        if (!Employee)
        {
            res.status(400).send({msg:"Invalid Email!!!"});
        }
        if (Employee.password!=password)
        {
            res.status(400).send({msg:"Invalid Password!!!"});   
        }  
        res.status(200).send(Employee);
    } catch (error) {
        console.log(error);
    }
}

const empTaskDisplay=async(req, res)=>{
   const {empid}=req.body;
   try {
        const Task= await TaskModel.find({empid:empid});
        res.status(200).send(Task);
   } catch (error) {
      console.log(error);
   }
}


const empTaskSubmit=async(req, res)=>{
    const { taskid, taskstatus } = req.body;
    try {
          const Task= await TaskModel.findByIdAndUpdate(taskid,{taskstatus:taskstatus, empreport:"submited"});          
          res.status(200).send("Task Successfully submited!");
    
        } catch (error) {
        console.log(error);
    }
}
const ChangePassword=async(req,res)=>{
  const {userid,oldpassword,newpassword,confirmpassword}=req.body;
  try {
    const User=await EmpModel.findById(userid)
    // console.log(resetpass)
    if(User.password!=oldpassword)
    {
        res.status(400).send({msg:"Old password not matches"})
    }
    else if(newpassword!=confirmpassword)
    {
        res.status(400).send({msg:"newpassword and old password not matches"})
    }
    else
    {
      const changedpass=await EmpModel.findByIdAndUpdate(userid,{password:newpassword});  
      res.status(200).send({msg:"password changed"})
    }
    
  } catch (error) {
    console.log(error)
  }
  
}

module.exports={
    emploginCheck,
    empTaskDisplay,
    empTaskSubmit,
    ChangePassword
}