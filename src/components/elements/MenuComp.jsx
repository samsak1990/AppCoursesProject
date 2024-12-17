import React from "react";
import Menu from "../../styles/elements/Menu.css";


const MenuComp = ({setLinks})=>{
    return(
        <Menu.MenuContainer>
            {
                setLinks.map((link, i)=>{
                    return (
                        <Menu.Links key={i}>{link.name}</Menu.Links>
                    )
                })
            }
        </Menu.MenuContainer>
    )

}

export default MenuComp