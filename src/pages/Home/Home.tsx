import burgerImage from '../../assets/Hamburger-bro.svg';

import { Container, ImageContainer, TextContainer } from './styles';
import { useTheme } from 'styled-components';

import { Hamburger } from 'phosphor-react';

export function Home() {
	const theme = useTheme();
	return (
		<Container>
			<ImageContainer>
				<img
					src={burgerImage}
					alt=''
				/>
				<a
					href='https://storyset.com/food'
					target='_blank'
				>
					Food illustrations by Storyset
				</a>
			</ImageContainer>

			<TextContainer>
				<h1>Recipe-Book <Hamburger weight='fill' color={theme.COLORS.TEXT.PRIMARYTITLE}/></h1>
				<p>Todas as suas receitas em um só lugar</p>
				<button>Explorar</button>
			</TextContainer>
		</Container>
	);
}