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
  }

  a{
    text-decoration: none;
    color: ${({theme})=>theme.COLORS.TEXT.DEFAULT};
  }
  a:hover{
    text-decoration: underline;
  }
`

export const TextContainer = styled.div`
  text-align: center;

  button{
    background-color: ${({theme})=>theme.COLORS.BACKGROUND.BUTTON};
    border: none;
    border-radius: 16px;
    width: 250px;
    height: 50px;
    font-size: 20px;
    font-weight: 700;
  }
`