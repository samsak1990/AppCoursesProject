import React from "react"
import { Outlet } from "react-router-dom";
import HeaderComp from "../views/HeaderComp"
import FooterComp from "../views/FooterComp"
import ContentWrapper from "../../styles/styles.css";

const Main = ()=>{
    return(
        <>
            <HeaderComp></HeaderComp>
            <ContentWrapper>
                <Outlet/>
            </ContentWrapper>
            <FooterComp></FooterComp>
        </> 
    )
}

export default Main