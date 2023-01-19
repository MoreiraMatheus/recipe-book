import { createContext, useState } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { MainRoutes } from './routes/routes';
import { Header } from './components/Header';

import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/themes/light';
import { GlobalStyle } from './styles/GlobalStyle';

// dados que serão consultados globalmente
interface AppContextProps {
	userName: string;
	setUserName: any;
	savedRecipes: number;
	publishedRecipes: number;
}

export const AppContext = createContext<AppContextProps>({
	userName: '',
	setUserName: '',
	savedRecipes: 0,
	publishedRecipes: 0,
});

function App() {
	const [userName, setUserName] = useState<string>('Fulano de tal');
	const savedRecipes = 0;
	const publishedRecipes = 0;

	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyle />
			<AppContext.Provider
				value={{ userName, setUserName, savedRecipes, publishedRecipes }}
			>
				<Router>
					<Header />
					<MainRoutes />
				</Router>
			</AppContext.Provider>
		</ThemeProvider>
	);
}

export default App;
