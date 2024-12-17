import React from "react";
import MenuComp from "../elements/MenuComp";
import ButtonsHeader from "../elements/ButtonsHeader";
import Header from "../../styles/views/Header.css";

const HeaderComp = ()=>{
    return (
        <>
            <Header>
                <MenuComp/>
                <ButtonsHeader/>
            </Header>
        </>
    )
}

export default HeaderComp