import React from "react";
import Menu from "../../styles/elements/Menu.css";
import menuLinks from "../../data/MenuLinks";


const MenuComp = ()=>{
    return(
        <Menu.MenuContainer>
            {
                menuLinks.map((link, i)=>{
                    return (
                        <Menu.Links key={i}>{link.name}</Menu.Links>
                    )
                })
            }
        </Menu.MenuContainer>
    )

}

export default MenuComp