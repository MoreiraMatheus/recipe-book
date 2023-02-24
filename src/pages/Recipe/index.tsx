import { Container, Card } from "./styles";
 
interface RecipeProps{
  image: string;
  name: string;
}

export function Recipes({ image, name }: RecipeProps){
  return(
    <Container>
      <Card>
        <h1>{name}</h1>
        <img src={image} alt={name} />
      </Card>
      {/* imagem */}
      {/* nome da receita */}
      {/* nome do chefe */}
      {/* quantidade de estrelas */}
      {/* data em que foi publicada */}
      {/* tempo de preparo */}
      {/* quantidade de porções que serve */}
      {/* modo de preparo */}
    </Container>
  )
}