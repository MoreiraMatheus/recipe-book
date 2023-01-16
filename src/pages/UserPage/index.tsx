import { useContext } from 'react';
import { Container } from './styles';
import { Title } from '../../components/Title/styles';
import { RecipeCard } from '../../components/RecipeCard';
import { AppContext } from '../../App';

export function UserPage() {
	const { userName } = useContext(AppContext)

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
				<div id='userDataTape'>
          <h1>{userName}</h1>
          <p>Receitas salvas</p>
					<p>receitas publicadas</p>
					<div id="triangle"></div>
        </div>
			</section>
		</Container>
	);
}
