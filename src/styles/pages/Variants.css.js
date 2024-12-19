import styled from "styled-components";

const VariantsCSS = {
    ContentBlockTop: styled.div`
        max-width: 580px;
        margin: 150px 0;
    `,
    LinkOnDocument: styled.a`
        position: relative;
        display: inline-block;
        color: #BA75FF;
        padding-left: 42px;
        cursor: pointer;
        &::before{
            content: '';
            position: absolute;
            top: 50%;
            transform: translate(calc(-100% - 12px), -50%) ;
            display: block;
            width: 26px;
            height: 26px;
            background: url('https://raw.githubusercontent.com/samsak1990/ImageForAppCoursesProject/main/forDesktop/icon_document.png') no-repeat center center/contain;
        }
    `,
    TitleH1:styled.h1`
        font-size: 48px;
        line-height: 58px;
        color: #4d5766;
    `,
    Description: styled.p`
        max-width: 450px;
        color: #4d5766;
        line-height: 20px;
        font-weight: 500;
        margin-bottom: 50px;
    `,
    ButtonsBlock: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `,
    Button: styled.button`
        display: block;
        border: 1px solid red;
        padding: 15px 20px;
        border-radius: 7px;
        cursor: pointer;
        color: ${props => props.fontColor};
        background-color: ${props => props.backgroundColor};
        border: ${props => props.border};
    `,
    TitleH2: styled.h2`
        font-size: 35px;
        font-weight: 700;
        text-align: center;
        color: #4d5766;
        margin-bottom: 40px;
    `,
    DescriptionUnderH2: styled.p`
        display: inline-block;
        max-width: 645px;
        line-height: 24px;
    `
}


export {VariantsCSS}