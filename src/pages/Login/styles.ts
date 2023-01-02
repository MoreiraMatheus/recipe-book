import styled from "styled-components";

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