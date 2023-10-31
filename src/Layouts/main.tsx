import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Layout: FC<PropsWithChildren> = () =>{
    return (
        <>
            <Header/>
            <div className="bg-landing  bg-cover bg-center bg-no-repeat">
            <Outlet/>
            </div>
           
            <Footer/>
        </>
       

    )
}

export default Layout;