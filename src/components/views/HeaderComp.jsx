import React from "react";
import MenuComp from "../elements/MenuComp";
import Header from "../../styles/views/Header.css";

const HeaderComp = ()=>{
    return (
        <>
            <Header>
                <MenuComp/>
            </Header>
        </>
    )
}

export default HeaderComp