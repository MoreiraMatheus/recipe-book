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

    hr{
      border: 1px dashed ${({theme})=>theme.COLORS.BACKGROUND.BUTTON};
      width: 100%;
    }
  }
`

export const DataWrapper = styled.div`
  height: 65%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  text-align: left;

  img{
    width: 100px;
    height: 100px;
    border: 1px solid ${({theme})=>theme.COLORS.BACKGROUND.BUTTON};
    border-radius: 50%;
  }

  p{
    width: 100%;
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 35%;
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 4px;
`