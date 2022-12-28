import { Container } from './styles';

import { FlipCard } from '../../components/FlipCard';
import { RecipeCard } from '../../components/RecipeCard';

export function Discovery() {
	return (
		<Container>
			<h1>Discovery</h1>
			<section>
				<FlipCard
					imageLink='https://comidinhasdochef.com/wp-content/uploads/2018/11/torta-de-frango-de-liquidificador.jpg'
					recipeName='Torta de frango'
					chefName='Matheus'
					stars={2}
					publishedDate='27/12/2022'
				/>
				{/* <FlipCard
          imageLink='https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3277542:1663012513/Pizza%20de%20Calabresa.jpg?f=16x9&h=720&w=1280&$p$f$h$w=12dadad'
          recipeName='Pizza'
          chefName='Fulano de tal'
          stars={4}
          publishedDate='22/03/2018'
        /> */}
				<RecipeCard
					imageLink='https://comidinhasdochef.com/wp-content/uploads/2018/11/torta-de-frango-de-liquidificador.jpg'
					recipeName='Torta de frango'
					chefName='Matheus'
					stars={2}
					publishedDate='27/12/2022'
				/>
			</section>
		</Container>
	);
}
