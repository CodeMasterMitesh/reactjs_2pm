import { Outlet } from "react-router"
import { Footer } from "../Footer"
import Nav from "./Nav"
import "../Store.jsx"

export const AppLayout = () =>{
    return (
        <>
            <Nav/>
                 <Outlet />
            <Footer/>
        </>

    )
}