import styled from "styled-components";

interface ButtonProps {
  width?: string;
  height?: string;
  hoverAnimation?: boolean;
  extraCSS?: string
}

export const Button = styled.button<ButtonProps>`
  background-color: ${({theme})=>theme.COLORS.BACKGROUND.BUTTON};
  color: ${({theme})=>theme.COLORS.TEXT.SECONDARYTEXT};
  border: none;
  border-radius: 16px;
  width: ${({width='auto'})=> width };
  height: ${({height='auto'})=> height };
  margin: 16px 0;
  cursor: pointer;
  font-size: 20px;
  font-weight: 800;

  ${({hoverAnimation, theme})=> !hoverAnimation ? '' : `
    &:hover{
      transition: background-color .4s;
      background-color: ${theme.COLORS.BACKGROUND.USERBUTTON};
    }
  `}
  ${({extraCSS})=>extraCSS}
`