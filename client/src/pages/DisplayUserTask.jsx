import axios from "axios";
import { useState, useEffect } from "react";

const DisplayUserTask=()=>{
    const [empid, setEmpid] = useState("");
    const loadData=async()=>{
        try {
            let api="http://localhost:8080/employee/employeetaskdisplay";
             const response= await axios.post(api, {empid:empid});
             console.log(response.data);
        } catch (error) {
              console.log(error);
        }
    }


    useEffect(()=>{
        setEmpid(localStorage.getItem("empid"));
    }, []);


    return(
        <>
          <h1> Your Task/Assignmemnt</h1>
        </>
    )
}

export default DisplayUserTask;