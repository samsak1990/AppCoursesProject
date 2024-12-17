import React from "react";
import MenuComp from "../elements/MenuComp";
import ButtonsHeader from "../elements/ButtonsHeader";
import Header from "../../styles/views/Header.css";
import {mainMenuLinks} from "../../data/MenuLinks";

const HeaderComp = ()=>{
    return (
        <>
            <Header>
                <MenuComp setLinks={mainMenuLinks}/>
                <ButtonsHeader/>
            </Header>
        </>
    )
}

export default HeaderComp