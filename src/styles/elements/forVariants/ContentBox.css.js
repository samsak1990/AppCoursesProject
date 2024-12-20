import styled from "styled-components";

const CSS = {
    BoxsWrapper: styled.div`
        display: flex;
        flex-direction: column;
        gap: 150px;
        width: 100%;
    `,
    BoxAlone: styled.div`
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        flex-direction: ${props => props.reverse ? 'row' : 'row-reverse'};
    `,
    BoxAloneImage: styled.div`
        position: relative;
        flex: 1.5;
        min-width: 600px;
        max-width: 740px;
        height: 472px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
    `,
    BoxAloneText: styled.div`
        display: flex;
        position: relative;
        min-width: 400px;
        align-items: flex-start;
        justify-content: center;
        border: 1px solid green;
        flex: 1;
        h3{
            color: black;
            font-size: 25px;
            line-height: 30px;
        }
    `,
    BoxAloneText_BG: styled.div`
        position: absolute;
        border: 1px solid red;
        margin: 0 auto;
        z-index: -1;
        span{
            display: block;
            text-align: center;
            font-size: 20rem;
            font-weight: 700;
            color: #F1E6F1;
        }
    `,

}

export default CSS