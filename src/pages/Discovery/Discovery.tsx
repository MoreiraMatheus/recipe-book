import { Container } from './styles';

import { RecipeCard } from '../../components/RecipeCard';

export function Discovery() {
	return (
		<Container>
			<h1>Discovery</h1>
			<section>
				<RecipeCard
          imageLink='https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3277542:1663012513/Pizza%20de%20Calabresa.jpg?f=16x9&h=720&w=1280&$p$f$h$w=12dadad'
          recipeName='Pizza'
          chefName='Fulano de tal'
          stars={4}
          publishedDate='22/03/2018'
					preparo={16}
					porc={8}
        />
				<RecipeCard
					imageLink='https://comidinhasdochef.com/wp-content/uploads/2018/11/torta-de-frango-de-liquidificador.jpg'
					recipeName='Torta de frango'
					chefName='Matheus'
					stars={2}
					publishedDate='27/12/2022'
					preparo={16}
					porc={10}
				/>
			</section>
		</Container>
	);
}
