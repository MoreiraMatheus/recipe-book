import styled, { keyframes } from "styled-components";

const darkeningBackground = keyframes`
  from{
    background-color: rgba(0, 0, 0, 0);
    opacity: 0;
  }
  to{
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 1;
  }
`

const popupApearing = keyframes`
  from{
    opacity: 0;
    transform: translate(-50%, -100%);
  }
  to{
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`

export const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-top: 85px;

  > div{
    display: flex;
    justify-content: center;
    width: 100vw;
    margin-top: 24px;

    form{
      width: 400px;
      padding: 32px;
      display: flex;
      flex-direction: column;
      border-radius: 8px;
      row-gap: 16px;
      background-color: ${({theme})=>theme.COLORS.BACKGROUND.FORM};
    }
  }
`

export const InputBox = styled.div`
  position: relative;

  input{
    width: 100%;
    height: 40px;
    padding: 8px;
    margin-bottom: 16px;
    font-size: 1em;

    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 2px solid ${({theme})=>theme.COLORS.TEXT.PRIMARYTEXT};

    &:focus ~ label, &:valid ~ label{
      transform: translateY(-25px);
      font-size: .8em;
    }
  }
  
  label{
    font-size: 1em;
    left: 0;
    top: 15px;
    position: absolute;
    width: 400px;
    transition: all .4s;
    color: ${({theme})=>theme.COLORS.TEXT.PRIMARYTITLE};
    font-weight: 600;
  }
`

export const Popup = styled.dialog`
  animation: .5s ${darkeningBackground} linear;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  border: none;
  z-index: 2;
  
  div{
    animation: .5s ${popupApearing} linear;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 200px;
    background-color: ${({theme})=>theme.COLORS.BACKGROUND.FORM};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 16px;

    button{
      background-color: ${({theme})=>theme.COLORS.BACKGROUND.BUTTON};
      color: ${({theme})=>theme.COLORS.TEXT.SECONDARYTEXT};
      font-weight: 600;
      font-size: 16px;
      border: none;
      border-radius: 16px;
      padding: 8px;
      cursor: pointer;
    }
  }
`