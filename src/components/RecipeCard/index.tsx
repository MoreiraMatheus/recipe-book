import { Container, RecipeInfo } from './styles';

import { Star } from 'phosphor-react';

export function RecipeCard() {
	return (
		<Container image='https://comidinhasdochef.com/wp-content/uploads/2018/11/torta-de-frango-de-liquidificador.jpg'>
      {/* Ver a possibilidade de usar img aqui no lugar de section */}
			<section></section>
			<RecipeInfo>
				<h1>Torta de frango</h1>
				<span>
					chefe:<mark>Fulano</mark>
				</span>
				<span>
					<Star
						color='yellow'
						weight='fill'
					/>
					<span>0</span>
				</span>
        <span>publicado em:</span>
        
			</RecipeInfo>
		</Container>
	);
}
