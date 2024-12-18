import React from "react";
import MenuComp from "../elements/MenuComp";
import ButtonsHeader from "../elements/ButtonsHeader";
import Header from "../../styles/views/Header.css";
import {mainMenuLinks} from "../../data/MenuLinks";
import ContentWrapper from "../../styles/styles.css";

const HeaderComp = ()=>{
    return (
        <div style={{width:'100%', backgroundColor: '#fefefe'}}>
            <ContentWrapper>
                <Header>
                    <MenuComp setLinks={mainMenuLinks}/>
                    <ButtonsHeader/>
                </Header>
            </ContentWrapper>
        </div>
    )
}

export default HeaderComp