import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-top: 85px;
  
  section{
    /* background-color: aqua; */
    width: 100vw;
    display: flex;
    justify-content: space-between;
  }

  div#recipes{
    display: flex;
    column-gap: 56px;
    row-gap: 28px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 32px 8px;
    max-width: 600px;
    overflow-y: scroll;
  }

  div#userData{
    width: 30%;
    height: 40px;
    background-color: ${({theme})=>theme.COLORS.BACKGROUND.HEADER};
  }
`