import styled from "styled-components";

export const Title = styled.h1`
  font-family: ${({theme})=>theme.FONTS.TITLE};
  font-size: 2em;
  color: ${({theme})=>theme.COLORS.TEXT.PRIMARYTITLE};
  padding: 8px;
`