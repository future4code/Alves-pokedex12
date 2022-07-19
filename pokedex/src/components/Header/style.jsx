import styled from "styled-components";

export const Div = styled.div`
display: flex;
position: relative;
width: 100vw;
height: 160px;
max-width: 100vw;
justify-content: center;
align-items: center;
img{
    position: absolute;
}
button{
    margin: 0 20px 0 auto;
    width: 287px;
    height: 74px;
    background-color: #33A4F5;
    border-radius: 8px;
    border: none;
    color: white;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    box-shadow: 3px 3px 3px 2px gray;
    :hover{
        background-color: #e11f1f;
        border: 2px solid white;
        text-decoration: underline;
        cursor: pointer;
        transition: 0.2s;
    }
}
`

