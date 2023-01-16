import { createContext, useState } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { MainRoutes } from './routes/routes';
import { Header } from './components/Header';

import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/themes/light';
import { GlobalStyle } from './styles/GlobalStyle';

interface AppContextProps {
	userName: string;
	setUserName: any
}

export const AppContext = createContext<AppContextProps>({userName : '', setUserName: ''});

function App() {
	const [userName, setUserName] = useState<string>('Fulano de tal');
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyle />
			<AppContext.Provider value={{ userName, setUserName }}>
				<Router>
					<Header />
					<MainRoutes />
				</Router>
			</AppContext.Provider>
		</ThemeProvider>
	);
}

export default App;
