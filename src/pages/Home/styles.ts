import styled from "styled-components";

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
  /* background-color: yellow; */

  img{
    width: 450px;
    height: 378.28px;
    /* background-color: blue; */
  }

  a{
    text-decoration: none;
    color: ${({theme})=>theme.COLORS.TEXT.DEFAULT};
    margin-top: -5%;
    outline: none;
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
  }
  
  p{
    font-weight: 600;
    font-size: 2em;
    color: ${({theme})=>theme.COLORS.TEXT.PRIMARYTEXT};
  }

  button{
    background-color: ${({theme})=>theme.COLORS.BACKGROUND.BUTTON};
    color: ${({theme})=>theme.COLORS.TEXT.SECONDARYTEXT};
    border: none;
    border-radius: 16px;
    width: 250px;
    height: 50px;
    margin: 16px 0;
    font-size: 20px;
    font-weight: 800;
    cursor: pointer;
  }
`