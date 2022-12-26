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
  top: 0;

  h1{
    font-family: ${({theme})=>theme.FONTS.TITLE};
    font-size: 2em;
    color: ${({theme})=>theme.COLORS.TEXT.PRIMARYTITLE};
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  nav{
    display: flex;
    a{
      margin: 0 32px;
      font-size: 1.5em;
      font-weight: 600;
      color: ${({theme})=>theme.COLORS.TEXT.SECONDARYTEXT};
      text-decoration: none;
      position: relative;
    }
    a::before{
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background-color: ${({theme})=>theme.COLORS.TEXT.SECONDARYTEXT};
      transition: width .3s ease-out;
    }
    a:hover::before{
      width: 100%;
      left: 0;
      right: auto;
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