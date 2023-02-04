import { Container, DataWrapper, ButtonWrapper } from './styles';

import { Title } from '../../components/Title/styles';
import { Button } from '../../components/Button/styles';

import { useContext } from 'react';
import { AppContext } from '../../App';

import { useNavigate } from 'react-router-dom';

export function UserPage() {
	const { userName, savedRecipes, publishedRecipes, setUserName, location } =
		useContext(AppContext);

  const navigate = useNavigate()
	return (
		<Container>
			<Title>{userName}</Title>
			<div>
				<DataWrapper>
					<img src="https://upload.wikimedia.org/wikipedia/commons/6/67/Tuxgaucho.svg" alt="foto user" />
					<p>Receitas salvas: {savedRecipes}</p>
					<p>Receitas publicadas: {publishedRecipes}</p>
					<p>Local: {location}</p>
					{/* <p>Por aqui desde:</p>
					<p>Seguidores: </p>
					<p>Seguindo: </p> */}
				</DataWrapper>
				<hr />
				<ButtonWrapper>
					{/* <Button
						extraCSS='padding: 8px; margin: 0'
						width='80%'
					>
						Alterar nome
					</Button>
					<Button
						extraCSS='padding: 8px; margin: 0'
						width='80%'
					>
						Alterar foto
					</Button> */}
					<Button
						extraCSS='padding: 8px; margin: 0'
						width='80%'
						onClick={() => {
							setUserName('');
							navigate('/login')
						}}
					>
						Sair
					</Button>
				</ButtonWrapper>
			</div>
		</Container>
	);
}
