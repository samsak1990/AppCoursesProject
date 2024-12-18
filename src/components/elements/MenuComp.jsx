import React from "react";
import Menu from "../../styles/elements/Menu.css";
import { NavLink } from "react-router-dom";


const MenuComp = ({setLinks})=>{
    return(
        <Menu.MenuContainer>
            {
                setLinks.map((link, i)=>{
                    return (
                        <Menu.Links key={i}>
                            <NavLink to={link.href} className={({ isActive }) => isActive ? 'active' : ''}>{link.name}</NavLink>
                        </Menu.Links>
                    )
                })
            }
        </Menu.MenuContainer>
    )

}

export default MenuComp