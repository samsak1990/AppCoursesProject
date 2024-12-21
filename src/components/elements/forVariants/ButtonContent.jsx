import React from "react";
import Button from "../../../styles/elements/forVariants/ButtonContent.css";

const ButtonContent = ({text, styling, className = ''})=>{
    return(
        <>
            <Button styling={styling} className={className}>{text}</Button>
        </>
    )
}

export default ButtonContent