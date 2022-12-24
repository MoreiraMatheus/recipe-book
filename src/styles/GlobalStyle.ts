import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    //Escolher uma fonte e passar para o arquivo de tema, deixar bem bonitinho

    //uso normal
    /* font-family: 'Archivo Narrow', sans-serif; */ /* 400 e 600 */
    font-family: 'Barlow Semi Condensed', sans-serif; /* 300 500 700 */
    /* font-family: 'Fredoka One', cursive; */ /* 400 */
    
    //titulos

    /* font-family: 'Lobster', cursive; */ /*400*/
    /* font-family: 'Pacifico', cursive; */ /*400*/
  }
`