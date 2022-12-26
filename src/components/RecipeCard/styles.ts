import styled, { keyframes } from "styled-components";

const CardAppears = keyframes`
  from{
    opacity: 0;
    transform: translateX(-100%);
  }
  to{
    left: 0;
    transform: translateX(0);
  }
`

export const Container = styled.div`
  width: 250px;
  height: 375px;
  flex-shrink: 0;
  background-color: ${({theme})=>theme.COLORS.BACKGROUND.RECIPECARD};
  border-radius: 8px;
  animation: .7s ${CardAppears} ease-out;
`