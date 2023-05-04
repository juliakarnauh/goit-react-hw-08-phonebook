import styled from "styled-components";
export const Div = styled.div`
position: absolute;
right: 120px;
top:10px;
display: flex;
gap: 15px;
align-items: center;`
export const Title = styled.strong`
color: grey;
font-weight: 400;
font-size:22px;
line-height: 28px;`
export const Span = styled.span`
color: rgb(95,158,160);`
export const Button = styled.button`
text-align: center;
align-item: center;
padding: 4px 12px;
border: 2px solid grey;
color: grey;
font-weight: 400;
font-size:22px;
line-height: 28px;
border-radius: 4px;
:hover{
    color: white;
    background-color:rgb(216, 64, 71);
    border: 2px solid white;
}`