import React from "react"
import { Outlet } from "react-router-dom";
import HeaderComp from "../views/HeaderComp"
import FooterComp from "../views/FooterComp"

const Main = ()=>{
    return(
        <>
            <HeaderComp></HeaderComp>
                <Outlet/>
            <FooterComp></FooterComp>
        </> 
    )
}

export default Main