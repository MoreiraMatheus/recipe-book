import { Container } from "./styles"
import { Title } from "../../components/Title/styles"
import { StorysetImage } from "../../components/StorysetImage"

import LoginImage from '../../assets/Mobile-login.svg'

export function Login(){
  return(
    <Container>
      <Title>Login</Title>
      <StorysetImage
        image={LoginImage}
        message="Phone illustrations by Storyset"
        link="https://storyset.com/phone"
      />
    </Container>
  )
}