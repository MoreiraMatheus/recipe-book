import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-top: 85px;

  > div{
    width: 400px;
    height: 450px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    background-color: ${({theme})=>theme.COLORS.BACKGROUND.FORM};
    div{
      height: 50%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 8px;
    }
  }
`