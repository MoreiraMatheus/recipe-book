import styled, { keyframes } from "styled-components";

const textAppears = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`

const imageAppears = keyframes`
  from{
    transform: scale(.1, .1) ;
    opacity: 0;
  }
  to{
    transform: scale(1, 1) ;
    opacity: 1;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    width: 450px;
    height: 378.28px;
    animation: .6s ${imageAppears} ease-out;
  }

  a{
    text-decoration: none;
    color: ${({theme})=>theme.COLORS.TEXT.DEFAULT};
    margin-top: -5%;
    outline: none;
    animation: .6s ${textAppears} linear;
  }
  a:hover{
    text-decoration: underline;
  }
`