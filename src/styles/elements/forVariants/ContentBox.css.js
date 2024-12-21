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
        flex-direction: ${props => props.dataReverse ? 'row' : 'row-reverse'};
        gap:20px;
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
        flex-direction: column;
        position: relative;
        min-width: 400px;
        align-items: center;
        justify-content: center;
        /* border: 1px solid green; */
        flex: 1;
        .extra{
            max-width: 500px;
            text-align: center;
        };
        .extra00{
            text-align: left;
            font-size: 18px;
            color: #4D5766;
            li{
                position: relative;
                list-style: none;
                padding-left: 87px;
                margin-bottom: 50px;
                max-width: 380px;
                &:last-child{
                    margin-bottom: 0;
                };
                &::before{
                    content: '';
                    display: block;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    left: -5px;
                    width: 87px;
                    height: 87px;
                    background: url('https://raw.githubusercontent.com/samsak1990/ImageForAppCoursesProject/main/forDesktop/Steps/x2.png') no-repeat center center/contain;
                }
            }
        };
        .extra01{
            /* outline: 1px solid red; */
            list-style: none;
            text-align: left;
            max-width: 288px;
            padding: 0 ;
            margin-left: 40%;
            li{
                box-sizing: border-box;
                width: 100%;
                height: 52px;
                line-height: 52px;
                color: #BA75FF;
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0,0,0,0.5);
                padding: 0 25px;
                margin-bottom: 17px;
                font-size: 12px;
                &:last-child{
                    margin-bottom: 0;
                }
            }
        };
        h3{
            color: black;
            font-size: 25px;
            line-height: 30px;
            text-align: left;
            width: 100%;
            margin-bottom: 20px;
        };
        p{  
            position: absolute;
            right: 5%;
            display: block;
            max-width: 320px;
            text-align: left;
            line-height: 24px;
        }
    `,
    BoxAloneText_BG: styled.div`
        position: absolute;
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