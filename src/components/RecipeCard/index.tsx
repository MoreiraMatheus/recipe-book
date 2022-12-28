import { Container, MainInformations, StarWrapper } from './styles';

import { FlipCardProps } from '../FlipCard';
import { Star } from 'phosphor-react';

export function RecipeCard({
	imageLink,
	recipeName,
	chefName,
	stars,
	publishedDate,
}: FlipCardProps) {
	return (
		<Container>
			<img
				src={imageLink}
				alt={recipeName}
			/>
			<div className='Wrapper'>
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
      <div className='MoreInfo'>
        <p>teste</p>
      </div>
		</Container>
	);
}
