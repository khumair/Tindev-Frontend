import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import './scss/styles.scss';
import NavBar from './components/NavBar'
import Landing from './pages/Landing'
import Footer from './components/Footer'
import EmailVerification from './pages/EmailVerification';

const App = () => (
	<Router>
		<NavBar />
		<main className="py-3">
			<Container>
				<Route path='/' component={Landing} exact />
				<Route path='/verify' component={EmailVerification} />
			</Container>
		</main>
		<Footer />
	</Router>
);

export default App;
