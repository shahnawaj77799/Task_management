// import { useState, useEffect } from "react";
// import {Link,useNavigate, Outlet} from "react-router-dom";


// const UserDashBoard=()=>{
//     const [empName, setempName]= useState("");
//     const [empEmail, setEmpEmail] = useState("");
//    const navigate=useNavigate();
//     useEffect(()=>{
//         setempName(localStorage.getItem("empname"));
//         setEmpEmail(localStorage.getItem("empemail"));
        
//     }, [])


    
//     const logout=()=>{
//         localStorage.clear();
//         navigate("/login")
//       }

//     return(
//         <>
           
//             <div className="admin-header">
//             welcome : {empName}, <br /> email: {empEmail}  
//           <button className="logout-button" onClick={logout}>Logout</button>
//         </div>
//           <div id="AdminData">
//           <div id="AdminleftMenu">
//               <Link to="displaytask" className="AdminmenuColor">Display Task</Link>
//                <br /> <br/>
//               <Link to="changepassword" className="AdminmenuColor">Change Password</Link>
//           </div>
//           <div id="AdminRightData">
//                  <Outlet/>
//           </div>

//           </div>
          
 

//         </>
//     )
// }

// export default UserDashBoard;




// import { useState, useEffect } from "react";
// import { Link, useNavigate, Outlet } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";  // Make sure Bootstrap is imported

// const UserDashBoard = () => {
//   const [empName, setEmpName] = useState("");
//   const [empEmail, setEmpEmail] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     setEmpName(localStorage.getItem("empname"));
//     setEmpEmail(localStorage.getItem("empemail"));
//   }, []);

//   const logout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <>
//       {/* Dashboard Header */}
//       <div className="admin-header d-flex justify-content-between align-items-center p-3 bg-primary text-white">
//         <div>
//           <h5>Welcome: {empName}</h5>
//           <p>Email: {empEmail}</p>
//         </div>
//         <button className="btn btn-danger" onClick={logout}>Logout</button>
//       </div>

//       <div className="container mt-4">
//         <div className="row">
//           {/* Left Menu */}
//           <div className="col-md-3">
//             <div className="list-group">
//               <Link to="displaytask" className="list-group-item list-group-item-action">
//                 Display Task
//               </Link>
//               <Link to="changepassword" className="list-group-item list-group-item-action">
//                 Change Password
//               </Link>
//             </div>
//           </div>

//           {/* Right Content */}
//           <div className="col-md-9">
//             <div id="AdminRightData">
//               <Outlet />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS for styling */}
//       <style jsx>{`
//         .admin-header {
//           background-color: #007bff;
//           color: white;
//         }
//         .logout-button {
//           background-color: red;
//           color: white;
//           border: none;
//         }
//         .list-group-item-action {
//           background-color: #f8f9fa;
//           color: #007bff;
//         }
//         .list-group-item-action:hover {
//           background-color: #007bff;
//           color: white;
//         }
//         .container {
//           margin-top: 20px;
//         }
//       `}</style>
//     </>
//   );
// };

// export default UserDashBoard;







import { useState, useEffect } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";  // Make sure Bootstrap is imported

const UserDashBoard = () => {
  const [empName, setEmpName] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setEmpName(localStorage.getItem("empname"));
    setEmpEmail(localStorage.getItem("empemail"));
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {/* Dashboard Header */}
      <div className="admin-header d-flex justify-content-between align-items-center p-4 bg-primary text-white shadow-sm">
        <div>
          <h5>Welcome: {empName}</h5>
          <p>Email: {empEmail}</p>
        </div>
        <button 
          className="btn btn-danger position-absolute top-0 end-0 m-3" 
          onClick={logout}
        >
          Logout
        </button>
      </div>

      <div className="container mt-5">
        <div className="row">
          {/* Left Menu with Card Styling */}
          <div className="col-md-3">
            <div className="list-group">
              <div className="card mb-3 shadow-sm">
                <div className="card-body">
                  <Link to="displaytask" className="card-title text-decoration-none text-primary">
                    <h5 className="card-title">Display Task</h5>
                  </Link>
                </div>
              </div>
              <div className="card mb-3 shadow-sm">
                <div className="card-body">
                  <Link to="changepassword" className="card-title text-decoration-none text-primary">
                    <h5 className="card-title">Change Password</h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-md-9">
            <div id="AdminRightData">
              <Outlet />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for additional styling */}
      <style jsx>{`
        .admin-header {
          background-color: #007bff;
          color: white;
          position: relative;
        }
        .logout-button {
          background-color: red;
          color: white;
          border: none;
        }
        .card {
          border: none;
        }
        .card-title {
          font-size: 1.2rem;
          color: #007bff;
          transition: color 0.3s ease;
        }
        .card-title:hover {
          color: #0056b3;
        }
        .container {
          margin-top: 20px;
        }
        .list-group-item-action {
          background-color: #f8f9fa;
          color: #007bff;
        }
        .list-group-item-action:hover {
          background-color: #007bff;
          color: white;
        }
      `}</style>
    </>
  );
};

export default UserDashBoard;

