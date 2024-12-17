import React from "react";
import HeaderComp from "../views/HeaderComp";
import FooterComp from "../views/FooterComp";
import Steps from "./Steps";

const Main = ()=>{
    return(
        <>
            <HeaderComp></HeaderComp>
            <Steps></Steps>
            <FooterComp></FooterComp>
        </>
        
    )
}

export default Main