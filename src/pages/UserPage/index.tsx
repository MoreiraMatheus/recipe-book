import { Container } from './styles';
import { Title } from '../../components/Title/styles';
import { RecipeCard } from '../../components/RecipeCard';

export function UserPage() {
	return (
		<Container>
			<Title>Página de user</Title>
			<section>
				<div id='recipes'>
					<RecipeCard
						imageLink='https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3277542:1663012513/Pizza%20de%20Calabresa.jpg?f=16x9&h=720&w=1280&$p$f$h$w=12dadad'
						recipeName='Pizza'
						chefName='Fulano de tal'
						stars={4}
						publishedDate='22/03/2018'
						preparationTime={16}
						servings={8}
					/>
					<RecipeCard
						imageLink='https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3277542:1663012513/Pizza%20de%20Calabresa.jpg?f=16x9&h=720&w=1280&$p$f$h$w=12dadad'
						recipeName='Pizza'
						chefName='Fulano de tal'
						stars={4}
						publishedDate='22/03/2018'
						preparationTime={16}
						servings={8}
					/>
					<RecipeCard
						imageLink='https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3277542:1663012513/Pizza%20de%20Calabresa.jpg?f=16x9&h=720&w=1280&$p$f$h$w=12dadad'
						recipeName='Pizza'
						chefName='Fulano de tal'
						stars={4}
						publishedDate='22/03/2018'
						preparationTime={16}
						servings={8}
					/>
					<RecipeCard
						imageLink='https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3277542:1663012513/Pizza%20de%20Calabresa.jpg?f=16x9&h=720&w=1280&$p$f$h$w=12dadad'
						recipeName='Pizza'
						chefName='Fulano de tal'
						stars={4}
						publishedDate='22/03/2018'
						preparationTime={16}
						servings={8}
					/>
					<RecipeCard
						imageLink='https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3277542:1663012513/Pizza%20de%20Calabresa.jpg?f=16x9&h=720&w=1280&$p$f$h$w=12dadad'
						recipeName='Pizza'
						chefName='Fulano de tal'
						stars={4}
						publishedDate='22/03/2018'
						preparationTime={16}
						servings={8}
					/>
					<RecipeCard
						imageLink='https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3277542:1663012513/Pizza%20de%20Calabresa.jpg?f=16x9&h=720&w=1280&$p$f$h$w=12dadad'
						recipeName='Pizza'
						chefName='Fulano de tal'
						stars={4}
						publishedDate='22/03/2018'
						preparationTime={16}
						servings={8}
					/>
					<RecipeCard
						imageLink='https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3277542:1663012513/Pizza%20de%20Calabresa.jpg?f=16x9&h=720&w=1280&$p$f$h$w=12dadad'
						recipeName='Pizza'
						chefName='Fulano de tal'
						stars={4}
						publishedDate='22/03/2018'
						preparationTime={16}
						servings={8}
					/>
				</div>
				<div id='userData'>
          <h1>Fulano de tal</h1>
          <p></p>
        </div>
			</section>
		</Container>
	);
}
