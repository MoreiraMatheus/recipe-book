import { StorysetImage } from "../../components/StorysetImage"
import { Title } from '../../components/Title/styles'

import { Container } from "./styles"

import NotFoundImage from '../../assets/Page-not-Found.svg'

export function ErrorPage(){
  return(
    <Container>
      <Title>Página não encontrada</Title>
      <StorysetImage
        image={NotFoundImage}
        link="https://storyset.com/not%20found"
        message="Not Found illustrations by Storyset"
      />
    </Container>
  )
}