import { Container, MainInformations, StarWrapper } from './styles';

import { Star } from 'phosphor-react';

interface RecipeCardProps{
  imageLink: string;
	recipeName: string;
	chefName: string;
	stars: number;
	publishedDate: string;
  preparationTime: number
  servings: number
}

export function RecipeCard({
	imageLink,
	recipeName,
	chefName,
	stars,
	publishedDate,
  preparationTime,
  servings,
}: RecipeCardProps) {
	return (
		<Container>
			<img
				src={imageLink}
				alt={recipeName}
			/>
			<div id='MainWrapper'>
				<MainInformations>
					<h1>{recipeName}</h1>
					<span>
						chefe: <mark>{chefName}</mark>
					</span>
				</MainInformations>
				<StarWrapper>
					<Star
						color='yellow'
						weight='fill'
					/>
					<span>{stars}</span>
				</StarWrapper>
				<span>publicado em: {publishedDate}</span>
			</div>
      <div id='BackInfo'>
        <span>Tempo de preparo: <mark>{preparationTime}min</mark> </span>
        <span>Porções: <mark>{servings}</mark> </span>
        <button>Ver Receita</button>
      </div>
		</Container>
	);
}
