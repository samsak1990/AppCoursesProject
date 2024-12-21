import React from "react";

const ListBox = ({list, nameClass})=>{
    return(
        <ul className={nameClass}>
            {
                list.map((li, i)=>{
                    return(
                        <li key={i}>{li}</li>
                    )
                })
            }
        </ul>
    )
}

export default ListBox