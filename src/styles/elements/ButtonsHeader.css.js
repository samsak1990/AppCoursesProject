import styled from "styled-components";

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
        background-color: #e4e4e4;
        border: 1px solid rgb(77, 76, 76);
        border-radius: 5px;
        color:rgb(77, 76, 76);
        width: 112px;
        height: 36px;
        cursor: pointer;
        margin-right: 26px;
    `,
    ButtonViolet: styled.button`
        background-color: #e0dced;
        border: 1px solid #ba75ff;
        border-radius: 5px;
        color:#ba75ff;
        width: 112px;
        height: 36px;
        cursor: pointer;
    `
}

export default Buttons