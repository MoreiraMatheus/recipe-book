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
					<img src="https://upload.wikimedia.org/wikipedia/commons/6/67/Tuxgaucho.svg" alt="foto user" />
					<p>Receitas salvas: {savedRecipes}</p>
					<p>Receitas publicadas: {publishedRecipes}</p>
					<p>Local: </p>
					<p>Por aqui desde:</p>
					<p>Seguidores: </p>
					<p>Seguindo: </p>
				</div>
				<hr />
				<Button
					extraCSS='padding: 8px;'
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
