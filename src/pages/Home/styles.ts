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

  button{
    background-color: ${({theme})=>theme.COLORS.BACKGROUND.BUTTON};
    color: ${({theme})=>theme.COLORS.TEXT.SECONDARYTEXT};
    border: none;
    border-radius: 16px;
    width: 250px;
    height: 50px;
    margin: 16px 0;
    cursor: pointer;
    font-size: 20px;
    font-weight: 800;
  }
  button:hover{
    transition: background-color .4s;
    background-color: ${({theme})=>theme.COLORS.BACKGROUND.USERBUTTON};
  }
`