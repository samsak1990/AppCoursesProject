import styled from "styled-components";

const Button = styled.button`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    font-size: 12px;
    max-width: 290px;
    width: 70%;
    height: 52px;
    padding: 20px 50px;
    color: ${props => props.styling === 'pink' ?  '#fff' : '#BA75FF'};
    background-color: ${props => props.styling === 'pink' ? '#BA75FF' : '#fff' };
    border: none;
    outline: none;
    border-radius: 5px;
    box-shadow: ${props => props.styling === 'pink' ?  'none' : '0 0 10px rgba(0,0,0,0.3)'};
    cursor: pointer;
    &.toUp{
        transform: translate(-50%, -60px);
    }
`

export default Button