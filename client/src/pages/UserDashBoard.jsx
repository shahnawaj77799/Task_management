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
// import "bootstrap/dist/css/bootstrap.min.css";  // Ensure Bootstrap is imported

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
//       {/* Full-screen layout */}
//       <div className="container-fluid vh-100">

//         {/* Full-Width Admin Header */}
//         <div className="admin-header  justify-content-between align-items-center p-4 bg-primary text-white shadow-sm">
//           <div>
//             <h5>Welcome: {empName}</h5>
//             <p>Email: {empEmail}</p>
//           </div>
//           <button className="btn btn-danger" onClick={logout}>Logout</button>
//         </div>

//         {/* Left Sidebar Navbar */}
//         <div className="row h-100">
//           {/* Sidebar Menu */}
//           <div className="col-md-3 col-lg-2 p-0 bg-light shadow-sm" id="sidebar">
//             <div className="navbar-nav flex-column">
//               <Link to="displaytask" className="nav-item nav-link px-4 py-3">
//                 Display Task
//               </Link>
//               <Link to="changepassword" className="nav-item nav-link px-4 py-3">
//                 Change Password
//               </Link>
//             </div>
//           </div>

//           {/* Main Content Area */}
//           <div className="col-md-9 col-lg-10 p-4" id="mainContent">
//             <Outlet />
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS for styling */}
//       <style jsx>{`
//         .admin-header {
//           background-color:rgb(216, 57, 17);
//           color: white;
//           position: relative;
//           z-index: 10;
//         }

//         .logout-button {
//           background-color: red;
//           color: grey;
//           border: none;
//         }

//         /* Left Sidebar Menu Styling */
//         #sidebar {
//           // position: fixed;
//           top: 0;
//           left: 0;
//           bottom: 0;
//           width: 250px;
//           background-color:rgb(27, 147, 202);
//           box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.1);
//         }

//         .navbar-nav .nav-item {
//           font-size: 1.1rem;
//           font-weight: 600;
//         }

//         .navbar-nav .nav-link {
//           color:rgb(17, 100, 196);
//           padding: 1.25rem 2rem;
//           transition: all 0.3s ease;
//           border-radius: 10px;
//         }

//         .navbar-nav .nav-link:hover {
//           color: white;
//           background-color:rgb(25, 245, 142);
//         }

//         // /* Main Content Area */
//         // #mainContent {
//         //   margin-left: 250px;
//         // }

//         /* Full-Width Layout */
//         .container-fluid {
//           padding-left: 0;
//           padding-right: 0;
//         }

//         .row {
//           margin-top: 20px;
//         }
//       `}</style>
//     </>
//   );
// };

// export default UserDashBoard;






import { useState, useEffect } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";  // Ensure Bootstrap is imported

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
      {/* Full-screen layout */}
      <div className="container-fluid vh-100">

        {/* Full-Width Admin Header */}
        <div className="admin-header  d-flex justify-content-between align-items-center p-4 bg-primary text-white shadow-sm">
          <div>
            <h5>Welcome: {empName}</h5>
            <p>Email: {empEmail}</p>
          </div>
          <button className="btn btn-danger" onClick={logout}>Logout</button>
        </div>

        {/* Left Sidebar Navbar */}
        <div className="row h-100">
          {/* Sidebar Menu */}
          <div className="col-12 col-md-3 col-lg-2 p-0 bg-light shadow-sm" id="sidebar">
            <div className="navbar-nav flex-column">
              <Link to="displaytask" className="nav-item nav-link px-4 py-3">
                Display Task
              </Link>
              <Link to="changepassword" className="nav-item nav-link px-4 py-3">
                Change Password
              </Link>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-12 col-md-9 col-lg-10 p-4" id="mainContent">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Custom CSS for styling */}
      <style jsx>{`
        .admin-header {
          background-color:rgb(216, 57, 17);
          color: white;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .logout-button {
          background-color: red;
          color: grey;
          border: none;
        }

        /* Left Sidebar Menu Styling */
        #sidebar {
          background-color: rgb(27, 147, 202);
          box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          height: 100vh;
        }

        .navbar-nav .nav-item {
          font-size: 1.1rem;
          font-weight: 600;
        }

        .navbar-nav .nav-link {
          color: rgb(17, 100, 196);
          padding: 1.25rem 2rem;
          transition: all 0.3s ease;
          border-radius: 10px;
        }

        .navbar-nav .nav-link:hover {
          color: white;
          background-color: rgb(25, 245, 142);
        }

        /* Full-Width Layout */
        .container-fluid {
          padding-left: 0;
          padding-right: 0;
        }

        .row {
          margin-top: 20px;
        }

        /* Responsive adjustments */
        @media (max-width: 767px) {
          #sidebar {
            position: relative;
            width: 100%;
            height: auto;
            box-shadow: none;
          }

          .navbar-nav .nav-item {
            font-size: 1rem;
          }

          .admin-header {
            flex-direction: column;
            align-items: flex-start;
            padding: 15px;
          }

          .admin-header h5 {
            margin-bottom: 5px;
          }

          .admin-header p {
            margin-bottom: 10px;
          }

          /* For mobile view, show main content in full width */
          #mainContent {
            padding-left: 0;
          }
        }
      `}</style>
    </>
  );
};

export default UserDashBoard;

