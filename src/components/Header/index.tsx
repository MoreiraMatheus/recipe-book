import { useContext } from 'react';
import { AppContext } from '../../App';

import { Container } from './styles';
import { Hamburger } from 'phosphor-react';
import { useTheme } from 'styled-components';

import { User } from 'phosphor-react';
import { Link, useNavigate } from 'react-router-dom';

export function Header() {

	const {userName} = useContext(AppContext)
	
	const theme = useTheme();
	const navigate = useNavigate()
	return (
		<Container>
			<h1 onClick={()=>{navigate('/')}}>
				Recipe-book
				<Hamburger
					weight='fill'
					color={theme.COLORS.TEXT.PRIMARYTITLE}
				/>
			</h1>
			<nav>
				<Link to={'/'}>Home</Link>
				<Link to={'/discovery'}>Descubra mais</Link>
				<Link to={userName === '' ? '/login' : '/recipes'}>Minhas receitas</Link>
			</nav>
			<div onClick={()=>{navigate(userName === '' ? '/login' : '/recipes')}}>
				<User
					weight='bold'
					color={theme.COLORS.OTHERS.USERICON}
					size={'100%'}
				/>
			</div>
		</Container>
	);
}
