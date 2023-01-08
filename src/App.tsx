import { createContext, useState } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { MainRoutes } from './routes/routes';
import { Header } from './components/Header';

import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/themes/light';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
	const [user, setUser] = useState(null);
	const AppContext = createContext({ user, setUser });
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyle />
			<AppContext.Provider value={{ user, setUser }}>
				<Router>
					<Header />
					<MainRoutes />
				</Router>
			</AppContext.Provider>
		</ThemeProvider>
	);
}

export default App;
