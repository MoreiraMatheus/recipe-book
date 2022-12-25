import { Container } from './styles';
import { Hamburger } from 'phosphor-react';
import { useTheme } from 'styled-components';

import { User } from 'phosphor-react';

export function Header() {
	const theme = useTheme();
	return (
		<Container>
			<h1>
				Recipe-book
				<Hamburger
					weight='fill'
					color={theme.COLORS.TEXT.PRIMARYTITLE}
				/>
			</h1>
			<ul>
				<li>Home</li>
				<li>Descubra mais</li>
				<li>Minhas receitas</li>
			</ul>
			<div>
				<User
					weight='bold'
					color={theme.COLORS.OTHERS.USERICON}
					size={'100%'}
				/>
			</div>
		</Container>
	);
}
