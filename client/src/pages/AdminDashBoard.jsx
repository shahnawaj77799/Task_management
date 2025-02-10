// import { useState, useEffect } from "react";
// import {Link, Outlet} from "react-router-dom";
// const AdminDashBoard=()=>{
//     const [adminName, setAdminName]= useState("");

//     useEffect(()=>{
//         setAdminName(localStorage.getItem("adminname"));
//     }, [])
//     return(
//         <>
//           <div id="adminNameDisplay">
//             welcome : {adminName} !  Logout
//           </div>
//           <div id="AdminData">
//           <div id="AdminleftMenu">
//               <Link to="createuser" className="AdminmenuColor">Create User</Link>
//                <br /> <br/>
//               <Link to="assigntask" className="AdminmenuColor">Assign Task</Link>
//               <br /> <br/>
//               <Link to="userreport" className="AdminmenuColor">Show Report</Link>
       
//            </div>
//           <div id="AdminRightData">
//                  <Outlet/>
//           </div>

//           </div>
          
//         </>
//     )
// }

// export default AdminDashBoard;



// import { useState, useEffect } from "react";
// import { Link, useNavigate, Outlet } from "react-router-dom";

// const AdminDashBoard = () => {
//   const [adminName, setAdminName] = useState("");

//   const navigate=useNavigate();
//   useEffect(() => {
//     setAdminName(localStorage.getItem("adminname"));
//   }, []);

//   const logout=()=>{
//     localStorage.clear();
//     navigate("/login")
//   }

//   return (
//     <>
//       <div className="admin-dashboard">
//         <div className="admin-header">
//           <h2>Welcome, {adminName}!</h2>
//           <button className="logout-button" onClick={logout}>Logout</button>
//         </div>

//         <div className="admin-container">
//           <div className="admin-left-menu">
//             <Link to="createuser" className="menu-link">Create User</Link>
//             <Link to="assigntask" className="menu-link">Assign Task</Link>
//             <Link to="userreport" className="menu-link">Show Report</Link>
//           </div>

//           <div className="admin-right-data">
//             <Outlet />
//           </div>
//         </div>
//       </div>

//       <style>
//         {`
//           .admin-dashboard {
//             font-family: 'Arial', sans-serif;
//             background-color:rgb(222, 235, 241);
//             min-height: 100vh;
//             padding: 20px;
//           }

//           .admin-header {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             background-color:rgb(116, 64, 212);
//             color: white;
//             padding: 15px;
//             border-radius: 8px;
//           }

//           .admin-header h2 {
//             margin: 0;
//           }

//           .logout-button {
//             padding: 8px 16px;
//             background-color: #FF5733;
//             color: white;
//             border: none;
//             border-radius: 5px;
//             cursor: pointer;
//             font-size: 14px;
//             transition: background-color 0.3s ease;
//           }

//           .logout-button:hover {
//             background-color: #C44536;
//           }

//           .admin-container {
//             display: flex;
//             margin-top: 20px;
//           }

//           .admin-left-menu {
//             width: 250px;
//             background-color:rgb(6, 73, 145);
//             padding: 20px;
//             border-radius: 8px;
//             box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
//           }

//           .menu-link {
//             display: block;
//             color: #fff;
//             text-decoration: none;
//             padding: 10px;
//             margin: 10px 0;
//             font-size: 16px;
//             border-radius: 5px;
//             transition: background-color 0.3s ease;
//           }

//           .menu-link:hover {
//             background-color: #3a4f61;
//           }

//           .admin-right-data {
//             flex-grow: 1;
//             padding: 20px;
//             margin-left: 20px;
//             background-color: #fff;
//             border-radius: 8px;
//             box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
//           }
//         `}
//       </style>
//     </>
//   );
// };

// export default AdminDashBoard;





import { useState, useEffect } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";

const AdminDashBoard = () => {
  const [adminName, setAdminName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setAdminName(localStorage.getItem("adminname"));
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div className="admin-dashboard">
        <div className="admin-header">
          <h2>Welcome, {adminName}!</h2>
          <button className="logout-button" onClick={logout}>Logout</button>
        </div>

        <div className="admin-container">
          <div className="admin-left-menu">
            <Link to="createuser" className="menu-link">Create User</Link>
            <Link to="assigntask" className="menu-link">Assign Task</Link>
            <Link to="userreport" className="menu-link">Show Report</Link>
          </div>

          <div className="admin-right-data">
            <Outlet />
          </div>
        </div>
      </div>

      <style>
        {`
          .admin-dashboard {
            font-family: 'Arial', sans-serif;
            background-color:rgb(222, 235, 241);
            min-height: 100vh;
            padding: 20px;
          }

          .admin-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: rgb(116, 64, 212);
            color: white;
            padding: 15px;
            border-radius: 8px;
          }

          .admin-header h2 {
            margin: 0;
          }

          .logout-button {
            padding: 8px 16px;
            background-color: #FF5733;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            transition: background-color 0.3s ease;
          }

          .logout-button:hover {
            background-color: #C44536;
          }

          .admin-container {
            display: flex;
            flex-wrap: wrap;
            margin-top: 20px;
          }

          .admin-left-menu {
            width: 250px;
            background-color: rgb(6, 73, 145);
            padding: 20px;
            border-radius: 8px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
          }

          .menu-link {
            display: block;
            color: #fff;
            text-decoration: none;
            padding: 10px;
            margin: 10px 0;
            font-size: 16px;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }

          .menu-link:hover {
            background-color: #3a4f61;
          }

          .admin-right-data {
            flex-grow: 1;
            padding: 20px;
            margin-left: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
          }

          /* Responsive Styles */
          @media (max-width: 768px) {
            .admin-container {
              flex-direction: column;
            }

            .admin-left-menu {
              width: 100%;
              margin-bottom: 15px;
            }

            .admin-right-data {
              margin-left: 0;
            }
          }

          @media (max-width: 480px) {
            .admin-header {
              flex-direction: column;
              text-align: center;
            }

            .admin-header h2 {
              margin-bottom: 10px;
            }

            .logout-button {
              margin-top: 10px;
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default AdminDashBoard;
