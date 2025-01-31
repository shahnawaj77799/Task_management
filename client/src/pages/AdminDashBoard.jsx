import { useState, useEffect } from "react";
import {Link, Outlet} from "react-router-dom";
const AdminDashBoard=()=>{
    const [adminName, setAdminName]= useState("");

    useEffect(()=>{
        setAdminName(localStorage.getItem("adminname"));
    }, [])
    return(
        <>
          <div id="adminNameDisplay">
            welcome : {adminName} !  Logout
          </div>
          <div id="AdminData">
          <div id="AdminleftMenu">
              <Link to="createuser" className="AdminmenuColor">Create User</Link>
               <br /> <br/>
              <Link to="assigntask" className="AdminmenuColor">Assign Task</Link>
              <br /> <br/>
              <Link to="userreport" className="AdminmenuColor">Show Report</Link>
       
           </div>
          <div id="AdminRightData">
                 <Outlet/>
          </div>

          </div>
          
        </>
    )
}

export default AdminDashBoard;