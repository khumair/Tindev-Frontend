import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import './scss/styles.scss';
import Landing from './pages/Landing'
import Footer from './components/Footer'
import Register from './pages/Register'
import EmailVerification from './pages/EmailVerification';
import Login from './pages/Login'

const App = () => (
	<Router>
		<main className="py-3">
			<Container>
				<Route path='/' component={Landing} exact />
				<Route path='/register' component={Register} />
				<Route path='/verify' component={EmailVerification} />
				<Route path='/login' component={Login} />
			</Container>
		</main>
		<Footer />
	</Router>
);

export default App;
