import styled from "styled-components";

const CSS = {
    BoxsWrapper: styled.div`
        display: flex;
        flex-direction: column;
        gap: 150px;
        width: 100%;
    `,
    BoxAlone: styled.div`
        display: flex;
        flex-direction: ${props => props.reverse ? 'row' : 'row-reverse'};
    `,
    BoxAloneImage: styled.div`
        width: 740px;
        height: 472px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
    `,
    BoxAloneText: styled.div`
        h3{
            color: black;
            font-size: 25px;
            line-height: 30px;
        }
    `,

}

export default CSS