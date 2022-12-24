import { Container } from "./styles"

export function Header(){
  return(
    <Container>
      <h1>Recipe-book</h1>
      <ul>
        <li>Home</li>
        <li>Descubra mais</li>
        <li>Minhas receitas</li>
      </ul>
      <div>imagem do usuário aqui</div>
    </Container>
  )
}