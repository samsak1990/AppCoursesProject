import styled from "styled-components";

const Menu = {
    MenuContainer: styled.menu`
        display: flex;
        flex-direction: row;
        padding: 0;
        font-size: 10px;
        align-items: center;
    `,
    Links: styled.li`
        list-style: none;
        padding: 0;
        margin: 0;
        margin-right: 25px;
        cursor: pointer;
        :last-child{
            margin-right: 0;
        }
    `
}

export default Menu