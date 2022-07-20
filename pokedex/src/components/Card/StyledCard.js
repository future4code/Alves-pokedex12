import Styled from 'styled-components'

export const CardDiv = Styled.div`
width: 100%;
height: 100%;
`
export const MinText = Styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: white;
margin-left:5%;
margin-top:5%;
`
export const Title = Styled.h1`
width: 159px;
height: 39px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
color: white;
margin-left: 5%;
margin-top: 1%;
`
export const Container = Styled.div`
width:440px;
height:210px;
border-radius:12px;
background-color: #729f92;
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const DetailsText = Styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: white;
margin-left:5%;
margin-top:10%;

`
export const Button = Styled.button`
justify-content:flex-end;
`

export const LeftSide = Styled.div`
flex-direction: column;
`
export const RightSide = Styled.div`
flex-direction: column;
margin-left:80% ;

`
export const TypeDiv = Styled.div`
display: inline-flex;
margin-left:5%;
margin-top:2%;
width: 99px;
height: 31px;
background-color:#70B873;
border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;
padding: 5px;
align-items: center;
justify-content: space-around;

`

// Preciso acertar a posição dessa imagem, ta variando conforme a tela e não conforme a div
export const Image = Styled.img`
position:absolute;
left:15%;
top:30%;`
