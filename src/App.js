import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Home from './pages/home';
import LandingPage from './pages/landingPage';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/home' element={<Home />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</Router>
	);
}

export default App;
