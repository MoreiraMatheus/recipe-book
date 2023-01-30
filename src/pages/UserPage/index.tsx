import { Container } from './styles';

import { Title } from '../../components/Title/styles';
import { Button } from '../../components/Button/styles';

import { useContext } from 'react';
import { AppContext } from '../../App';

import { useNavigate } from 'react-router-dom';

export function UserPage() {
	const { userName, savedRecipes, publishedRecipes, setUserName } =
		useContext(AppContext);

  const navigate = useNavigate()
	return (
		<Container>
			<Title>{userName}</Title>
			<div>
				<div>
					<p>Receitas salvas: {savedRecipes}</p>
					<p>Receitas publicadas: {publishedRecipes}</p>
				</div>
				<Button
					extraCSS='padding: 8px'
					width='80%'
					onClick={() => {
						setUserName('');
            navigate('/login')
					}}
				>
					sair
				</Button>
			</div>
		</Container>
	);
}
