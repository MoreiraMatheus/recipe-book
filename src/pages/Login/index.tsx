import { useState, useContext } from 'react';
import { AppContext } from '../../App';

import { Container, InputBox, Popup } from './styles';
import { Title } from '../../components/Title/styles';
import { StorysetImage } from '../../components/StorysetImage';

import LoginImage from '../../assets/StorySetImages/Mobile-login.svg';

import { Button } from '../../components/Button/styles';

import { useNavigate } from 'react-router-dom';

export function Login() {
	const navigate = useNavigate()

	const {setUserName} = useContext(AppContext)

	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')
	const [popupState, setPopupState] = useState(true)

	const validUser = (e: React.FormEvent<HTMLFormElement>) => {
		console.log({user, password})
		if(user === 'admin' && password === 'admin'){
			setUserName(user)
			navigate('/user')
		}
		else{
			e.preventDefault()
			setPopupState(true)
		}
	}

	return (
		<Container>
			<Title>Login</Title>
			<div>
				<form 
				onSubmit={e =>{
					validUser(e)
				}}>
					<InputBox>
						<input
							type='text'
							name='user'
							id='iuser'
							onChange={(e) => {
								setUser(e.target.value)
							}}
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
			<Popup open={popupState}>
				<div>
					<h1>Acesso negado</h1>
					<button onClick={()=>{
						setPopupState(false)
					}}>Tentar novamente</button>
				</div>
			</Popup>
		</Container>
	);
}
