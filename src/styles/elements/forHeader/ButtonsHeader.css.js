import styled, {css} from "styled-components";

const GeneralStyles = css`
    border-radius: 5px;
    width: 112px;
    height: 36px;
    cursor: pointer;
`

const Buttons = {
    ButtonsContainer: styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 250px;
        height: 36px;
        font-size: 12px;
    `,
    ButtonGrey: styled.button`
        ${GeneralStyles}
        background-color: #e4e4e4;
        border: 1px solid rgb(77, 76, 76);
        color:rgb(77, 76, 76);
        margin-right: 26px;
    `,
    ButtonViolet: styled.button`
        ${GeneralStyles}
        background-color: #e0dced;
        border: 1px solid #ba75ff;
        color:#ba75ff;
    `
}

export default Buttons