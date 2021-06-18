import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
	const [ isOpen, setIsOpen ] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<Router>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/work" exact component={WorkPage} />

				{/* <Route path="*" component={NotFound} /> */}
			</Switch>
		</Router>
	);
}

export default App;
