import React from "react";
import MenuComp from "../elements/MenuComp";
import ButtonsHeader from "../elements/ButtonsHeader";
import Header from "../../styles/views/Header.css";
import mainMenuLinks from "../../data/mainMenuLinks";

const HeaderComp = ()=>{
    return (
        <>
            <Header>
                <MenuComp links={mainMenuLinks}/>
                <ButtonsHeader/>
            </Header>
        </>
    )
}

export default HeaderComp