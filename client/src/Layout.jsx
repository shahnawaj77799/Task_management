import { Outlet } from "react-router-dom";
// import Footer from "./component/Footer";
import Header from "./component/Header";
import Footer from "./component/Footer";


const Layout=()=>{

    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
                </>
    )
}
export default Layout;