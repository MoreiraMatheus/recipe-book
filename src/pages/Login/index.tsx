import { useState, useContext } from 'react';
import { AppContext } from '../../App';

import { Container, InputBox } from './styles';
import { Title } from '../../components/Title/styles';
import { StorysetImage } from '../../components/StorysetImage';

import LoginImage from '../../assets/StorySetImages/Mobile-login.svg';

import { Button } from '../../components/Button/styles';

export function Login() {

	const {userName, setUserName} = useContext(AppContext)

	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')

	const onSubmit= () => {
		console.log({user, password})
		if(user === 'admin' && password === 'admin'){
			console.log('acesso liberado')
			setUserName(user)
		}
		else{
			console.log('acesso negado')
		}
	}

	return (
		<Container>
			<Title>Login</Title>
			<div>
				<form onSubmit={onSubmit}>
					<InputBox>
						<input
							type='text'
							name='user'
							id='iuser'
							onChange={(e) => setUser(e.target.value)}
							required
						/>
						<label htmlFor='iuser'>Usuário:</label>
						<span></span>
					</InputBox>

					<InputBox>
						<input
							type='password'
							name='password'
							id='ipassword'
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<label htmlFor='ipassword'>Senha:</label>
						<span></span>
					</InputBox>

					<Button
						type='submit'
						height='40px'
						hoverAnimation
					>
						Entrar
					</Button>
				</form>
				<StorysetImage
					image={LoginImage}
					message='Phone illustrations by Storyset'
					link='https://storyset.com/phone'
				/>
			</div>
		</Container>
	);
}

// Finalizar estrutura da página de Login
