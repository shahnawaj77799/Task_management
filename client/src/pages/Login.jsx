// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import {message} from "antd";
// import { useNavigate } from "react-router-dom";
// const Login=()=>{
//   const [userid, setUserID] = useState("");
//   const [password, setPassword]=useState("");
//   const [usertype, setUsertype] =useState("");
//   const navigate= useNavigate();

//  const handleSubmit=async()=>{
  
//       if (usertype=="admin")
//       {           
//            try {
//             let api="http://localhost:8080/admin/adminlogin";
//             const response= await axios.post(api, {userid:userid, password:password});
//             console.log(response.data);
//             if (response.status==200)
//             {
//               console.log(response.data);
//               localStorage.setItem("adminname", response.data.username);
//               localStorage.setItem("adminid", response.data.userid);
//               message.success("Login Succesfully!");
//               navigate("/admindashboard");

//             }
//            } catch (error) {
//             message.error(error.response.data.msg);
//            }
//       }
//       else 
//       if (usertype=="employee")
//       {
//          try {
             
//           let api="http://localhost:8080/employee/employeelogin";
//           const response= await axios.post(api, {userid:userid, password:password});
//           console.log(response.data);
//            if (response.status==200)
//            {
//              localStorage.setItem("empname", response.data.empname)
//              localStorage.setItem("empemail",  response.data.email)
//              localStorage.setItem("empid", response.data._id);
//               message.success("Login Succesfully!");

//              navigate("/userdashboard")
//            }

//          } catch (error) {
//           message.error(error.response.data.msg);
//          }

//       }


//  }




//   return(
//         <>
//         <center>
//     <div className="d-flex flex-column ms-5">
//       <div className="text-center">
//         <img src="src\images\img1.jpg"
//           style={{width: '185px'}} alt="logo" />
//         <h4 className="mt-1 mb-5 pb-1">We are The Team</h4>
//       </div>

//       <p>Please login to your account</p>

//         <input type="text"  placeholder="Enter your ID" value={userid} onChange={(e)=>{setUserID(e.target.value)}} />
//         <br/>
//         <br/>
//         <input type="password" placeholder="Enter your Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
//         <br/>
//         <br/>

//       <select name="usertype" id="" value={usertype} onChange={(e)=>{setUsertype(e.target.value)}}>
//         <option value="">Login as a ......</option>
//         <option value="admin">Admin</option>
//         <option value="employee">Employee</option>
//       </select>
//       <br/>
//       <br />
//       <button onClick={handleSubmit}>Login</button>

     

//     </div>

// </center>

//         </>
//     )
// }
// export default Login;







// import React, { useState } from "react";
// import axios from "axios";
// import { message } from "antd";
// import { useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Login = () => {
//   const [userid, setUserID] = useState("");
//   const [password, setPassword] = useState("");
//   const [usertype, setUsertype] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     if (usertype === "admin") {
//       try {
//         let api = "http://localhost:8080/admin/adminlogin";
//         const response = await axios.post(api, { userid: userid, password: password });
//         console.log(response.data);
//         if (response.status === 200) {
//           console.log(response.data);
//           localStorage.setItem("adminname", response.data.username);
//           localStorage.setItem("adminid", response.data.userid);
//           message.success("Login Successful!");
//           navigate("/admindashboard");
//         }
//       } catch (error) {
//         message.error(error.response.data.msg);
//       }
//     } else if (usertype === "employee") {
//       try {
//         let api = "http://localhost:8080/employee/employeelogin";
//         const response = await axios.post(api, { userid: userid, password: password });
//         console.log(response.data);
//         if (response.status === 200) {
//           localStorage.setItem("empname", response.data.empname);
//           localStorage.setItem("empemail", response.data.email);
//           localStorage.setItem("empid", response.data._id);
//           message.success("Login Successful!");
//           navigate("/userdashboard");
//         }
//       } catch (error) {
//         message.error(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <center >
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="card p-5 shadow-lg" style={{ width: "400px", borderRadius: "15px" }}>
//         <div className="text-center mb-4">
//           <img
//             src="src/images/img1.jpg"
//             style={{ width: "120px", height: "120px", objectFit: "cover" }}
//             alt="logo"
//           />
//           {/* <h4 className="mt-3">We are The Team</h4> */}
//         </div>

//         <p className="text-center mb-4" style={{ fontSize: "18px" }}>Please login to your account</p>

//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control form-control-lg"
//             placeholder="Enter your ID"
//             value={userid}
//             onChange={(e) => setUserID(e.target.value)}
//           />
//         </div>

//         <div className="mb-3">
//           <input
//             type="password"
//             className="form-control form-control-lg"
//             placeholder="Enter your Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <div className="mb-3">
//           <select
//             className="form-select form-select-lg"
//             value={usertype}
//             onChange={(e) => setUsertype(e.target.value)}
//           >
//             <option value="">Login as a ......</option>
//             <option value="admin">Admin</option>
//             <option value="employee">Employee</option>
//           </select>
//         </div>

//         <div className="d-grid gap-2">
//           <button className="btn btn-primary btn-lg" onClick={handleSubmit}>
//             Login
//           </button>
//         </div>

//         {/* <div className="text-center mt-3">
//           <p className="text-muted" style={{ fontSize: "14px" }}>
//             Don't have an account? <a href="/signup">Sign Up</a>
//           </p>
//         </div> */}
//       </div>
//     </div>
//     </center>
//   );
// };

// export default Login;





import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [userid, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (usertype === "admin") {
      try {
        let api = "https://task-management-q2u3.onrender.com/admin/adminlogin";
        const response = await axios.post(api, { userid: userid, password: password });
        console.log(response.data);
        if (response.status === 200) {
          localStorage.setItem("adminname", response.data.username);
          localStorage.setItem("adminid", response.data.userid);
          message.success("Login Successful!");
          navigate("/admindashboard");
        }
      } catch (error) {
        if (error.response) {
          // If the error has a response property (i.e., an HTTP error response)
          message.error(error.response.data.msg);
        } else if (error.request) {
          // If there is no response but the request was made (e.g., network issue)
          message.error("Network error: Please check your connection.");
        } else {
          // If there was an error in setting up the request
          message.error("An unexpected error occurred.");
        }
      }
    } else if (usertype === "employee") {
      try {
        let api = "https://task-management-q2u3.onrender.com/employee/employeelogin";
        const response = await axios.post(api, { userid: userid, password: password });
        console.log(response.data);
        if (response.status === 200) {
          localStorage.setItem("empname", response.data.empname);
          localStorage.setItem("empemail", response.data.email);
          localStorage.setItem("empid", response.data._id);
          console.log(response.data)
          message.success("Login Successful!");
          navigate("/userdashboard");
        }
      } catch (error) {
        if (error.response) {
          // If the error has a response property (i.e., an HTTP error response)
          message.error(error.response.data.msg);
        } else if (error.request) {
          // If there is no response but the request was made (e.g., network issue)
          message.error("Network error: Please check your connection.");
        } else {
          // If there was an error in setting up the request
          message.error("An unexpected error occurred.");
        }
      }
    }
  };

  return (
    <center >
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-5 shadow-lg" style={{ width: "400px", borderRadius: "15px" }}>
        <div className="text-center mb-4">
          <img
            src="src/images/img1.jpg"
            style={{ width: "120px", height: "120px", objectFit: "cover" }}
            alt="logo"
          />
        </div>

        <p className="text-center mb-4" style={{ fontSize: "18px" }}>Please login to your account</p>

        <div className="mb-3">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your ID"
            value={userid}
            onChange={(e) => setUserID(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <select
            className="form-select form-select-lg"
            value={usertype}
            onChange={(e) => setUsertype(e.target.value)}
          >
            <option value="">Login as a ......</option>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
          </select>
        </div>

        <div className="d-grid gap-2">
          <button className="btn btn-primary btn-lg" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
    </center>
  );
};

export default Login;








