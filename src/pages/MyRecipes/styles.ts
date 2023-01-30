import styled, {keyframes} from "styled-components";

const userDataTapeAppears = keyframes`
  from{
    transform: translate(0, -55vh);
  }
  to{
    transform: translate(0, 0);
  }
`

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100% ;
  height: 100vh;
  padding-top: 85px;
  
  section{
    /* background-color: aqua; */
    width: 100%;
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
    /* max-width: 600px; */
  }

  div#userDataTape{
    animation: 1s ease-in-out ${userDataTapeAppears};
    position: sticky;
    top: 85px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 16px;
    width: 200px;
    min-width: 200px;
    height: 55vh;
    margin-top: -85px;
    padding-top: 16px;
    background-color: ${({theme})=>theme.COLORS.BACKGROUND.USERDATATAPE};
    color: ${({theme})=>theme.COLORS.TEXT.SECONDARYTEXT};
    border-radius: 0 0 3px 3px;
    
    h1{
      font-weight: 600;
      font-size: 2em;
    }

    div#triangle{
      width: 141px;
      height: 141px;
      background-color: white;
      position: absolute;
      top: calc(55vh - 10vh - 6px);
      transform: rotate(45deg);
      border-top: 6px double ${({theme})=>theme.COLORS.BACKGROUND.USERDATATAPE};
      border-left: 6px double ${({theme})=>theme.COLORS.BACKGROUND.USERDATATAPE};
    }
  }
`