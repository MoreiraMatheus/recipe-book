import { useContext } from 'react';
import { AppContext } from '../../App';

import { Container } from './styles';
import { Title } from '../../components/Title/styles';
import { RecipeCard } from '../../components/RecipeCard';

export function MyRecipes() {
	const { userName, savedRecipes, publishedRecipes } = useContext(AppContext)

	return (
		<Container>
			<Title>Minhas receitas</Title>
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
				<div id='userDataTape'>
          <h1>{userName}</h1>
          <p>Receitas salvas: {savedRecipes}</p>
					<p>receitas publicadas: {publishedRecipes}</p>
					<div id="triangle"></div>
        </div>
			</section>
		</Container>
	);
}
