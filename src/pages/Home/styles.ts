import styled, { keyframes } from "styled-components";

const textAppears = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`

const imageAppears = keyframes`
  0%{
    transform: scale(.1, .1) ;
    opacity: 0;
  }
  100%{
    transform: scale(1, 1) ;
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

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    width: 450px;
    height: 378.28px;
    animation: .8s ${imageAppears} ease-out;
  }

  a{
    text-decoration: none;
    color: ${({theme})=>theme.COLORS.TEXT.DEFAULT};
    margin-top: -5%;
    outline: none;
    animation: 1s ${textAppears} linear;
  }
  a:hover{
    text-decoration: underline;
  }
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