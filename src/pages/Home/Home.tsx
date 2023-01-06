import burgerImage from '../../assets/StorySetImages/Hamburger-bro.svg';

import { Container, TextContainer } from './styles';
import { StorysetImage } from '../../components/StorysetImage';
import { Button } from '../../components/Button/styles';

import { useTheme } from 'styled-components';

import { Hamburger } from 'phosphor-react';

import { useNavigate } from 'react-router-dom';

export function Home() {
	const theme = useTheme();
	const navigate = useNavigate();
	return (
		<Container>
			<StorysetImage
				image={burgerImage}
				link='https://storyset.com/food'
				message='Food illustrations by Storyset'
			/>

			<TextContainer>
				<h1>
					Recipe-Book{' '}
					<Hamburger
						weight='fill'
						color={theme.COLORS.TEXT.PRIMARYTITLE}
					/>
				</h1>
				<p>Todas as suas receitas em um só lugar</p>
				<Button
					onClick={() => {
						navigate('/discovery');
					}}
					width='250px'
					height='40px'
					hoverAnimation
				>
					Explorar
				</Button>
				{/* <button onClick={()=>{navigate('/discovery')}}>Explorar</button> */}
			</TextContainer>
		</Container>
	);
}
