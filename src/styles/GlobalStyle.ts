import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${({theme})=>theme.FONTS.TEXT};
    font-weight: 400;
  }
`