import { useState, useEffect } from "react";
import {Link, Outlet} from "react-router-dom";


const UserDashBoard=()=>{
    const [empName, setempName]= useState("");
    const [empEmail, setEmpEmail] = useState("");
   
    useEffect(()=>{
        setempName(localStorage.getItem("empname"));
        setEmpEmail(localStorage.getItem("empemail"));
        
    }, [])


    


    return(
        <>
           
           <div id="adminNameDisplay">
            welcome : {empName}, <br /> email: {empEmail}  !  Logout
          </div>
          <div id="AdminData">
          <div id="AdminleftMenu">
              <Link to="displaytask" className="AdminmenuColor">Display Task</Link>
               <br /> <br/>
              <Link to="changepassword" className="AdminmenuColor">Change Password</Link>
          </div>
          <div id="AdminRightData">
                 <Outlet/>
          </div>

          </div>
          
 

        </>
    )
}

export default UserDashBoard;