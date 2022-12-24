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

  ul{
    display: inherit;
    list-style-type: none;

    li{
      margin: 0 8px;
    }
  }
`