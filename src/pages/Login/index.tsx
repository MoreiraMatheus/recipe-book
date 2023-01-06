import { Container, InputBox } from './styles';
import { Title } from '../../components/Title/styles';
import { StorysetImage } from '../../components/StorysetImage';

import LoginImage from '../../assets/StorySetImages/Mobile-login.svg';

import { Button } from '../../components/Button/styles';

export function Login() {
	return (
		<Container>
			<Title>Login</Title>
			<div>
				<form action='#'>
					<InputBox>
						<input
							type='text'
							name='user'
							id='iuser'
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
					{/* <button type="submit">Entrar</button> */}
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
