import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/Login";
import AdminDashBoard from "./pages/AdminDashBoard";
import CreateUser from "./pages/CreateUser";
import AssignTask from "./pages/AssignTask";

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
      </Route>    
   </Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;