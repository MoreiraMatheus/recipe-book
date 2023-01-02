import styled, { keyframes } from "styled-components";

const textAppears = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-top: 85px;
`

export const TextContainer = styled.div`
  text-align: center;
  max-width: 280px;

  h1{
    font-family: ${({theme})=>theme.FONTS.TITLE};
    font-size: 3em;
    color: ${({theme})=>theme.COLORS.TEXT.PRIMARYTITLE};
    animation: 1s ${textAppears} linear;
  }
  
  p{
    font-weight: 600;
    font-size: 2em;
    color: ${({theme})=>theme.COLORS.TEXT.PRIMARYTEXT};
    animation: 1s ${textAppears} linear;
  }
`