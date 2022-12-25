import styled from "styled-components";

export const Container = styled.nav`
  background-color: ${({theme})=>theme.COLORS.BACKGROUND.HEADER};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  width: 100%;
  padding: 0 32px;
  position: fixed;

  h1{
    font-family: ${({theme})=>theme.FONTS.TITLE};
    font-size: 2em;
    color: ${({theme})=>theme.COLORS.TEXT.PRIMARYTITLE};
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  ul{
    display: inherit;
    list-style-type: none;

    li{
      margin: 0 32px;
      color: ${({theme})=>theme.COLORS.TEXT.SECONDARYTEXT};
      font-weight: 600;
      font-size: 1.5em;
      transition: all 1s linear;
      cursor: pointer;
    }
    li:hover{
      text-decoration: underline;
    }
  }

  div{
    background-color: ${({theme})=>theme.COLORS.BACKGROUND.USERBUTTON};
    padding: 8px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }
`