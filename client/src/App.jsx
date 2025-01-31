import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/Login";
import AdminDashBoard from "./pages/AdminDashBoard";
import CreateUser from "./pages/CreateUser";
import AssignTask from "./pages/AssignTask";
import UserDashBoard from "./pages/UserDashBoard";
import DisplayUserTask from "./pages/DisplayUserTask";
import UserReport from "./pages/UserReport";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Login/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="admindashboard" element={<AdminDashBoard/>}>
           <Route path="createuser" element={<CreateUser/>}/>
           <Route path="assigntask" element={<AssignTask/>}/>
           <Route path="userreport" element={<UserReport/>}/>
      </Route>  
      <Route path="userdashboard" element={<UserDashBoard/>}>
          <Route path="displaytask" element={<DisplayUserTask/>}/>

      </Route>

   </Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;