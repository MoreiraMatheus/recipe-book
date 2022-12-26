import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 98vw;
  height: calc(100vh - 85px);
  margin-top: 85px;

  section{
    display: flex;
    column-gap: 56px;
    row-gap: 28px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 32px 0;
    max-width: 918px;
  }
`