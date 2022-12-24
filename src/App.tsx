import { BrowserRouter as Router } from 'react-router-dom';
import { MainRoutes } from './routes/routes';
import { Header } from './components/Header';

import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/themes/light';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyle/>
			<Router>
				<Header/>
				<MainRoutes/>
			</Router>
		</ThemeProvider>
	);
}

export default App;
