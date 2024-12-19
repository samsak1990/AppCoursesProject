import React from "react";
import Buttons from "../../../styles/elements/forHeader/ButtonsHeader.css";

const ButtonsHeader = ()=>{
    return(
        <Buttons.ButtonsContainer>
            <Buttons.ButtonGrey>Вход</Buttons.ButtonGrey>
            <Buttons.ButtonViolet>Регистрация</Buttons.ButtonViolet>
        </Buttons.ButtonsContainer>
    )
}

export default ButtonsHeader