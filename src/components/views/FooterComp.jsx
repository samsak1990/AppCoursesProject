import React from "react";
import Footer from "../../styles/views/Footer.css";
import MenuComp from "../elements/MenuComp";
import { footerMenuLinks } from "../../data/MenuLinks";

const FooterComp = ()=>{
    return(
        <Footer.FooterContainer>
            <MenuComp setLinks={footerMenuLinks}></MenuComp>
            <Footer.TextRights>@2024, все права защищены</Footer.TextRights>
        </Footer.FooterContainer>
    )
}

export default FooterComp