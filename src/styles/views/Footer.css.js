import styled from "styled-components";

const Footer = {
    FooterContainer: styled.footer`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 185px;
        background: inherit;
        padding: 20px 0;
    `,
    TextRights: styled.p`
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        color: #d7d7d7;
        text-align: center;
    `    
}

export default Footer