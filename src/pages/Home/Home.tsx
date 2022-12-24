import burgerImage from '../../assets/Hamburger-bro.svg' 

import { Container, ImageContainer, TextContainer } from './styles'

export function Home(){
  return(
    <Container>

      <ImageContainer>
        <img src={burgerImage} alt="" />
        <a href='https://storyset.com/food'>Food illustrations by Storyset</a>
      </ImageContainer>

      <TextContainer>
        <h1>Recipe-Book</h1>
        <p>Todas as suas receitas em um só lugar</p>
        <button>Explorar</button>
      </TextContainer>
    </Container>
  )
}