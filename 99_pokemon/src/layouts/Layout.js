import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from './Navbar'

function Layout() {
    return(
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
        </>
    )
}
export default Layout;