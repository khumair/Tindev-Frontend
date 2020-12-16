import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';

const Routes = () => (
	<Switch>
		<Route exact path='/' component={Landing} />
		<Route path='/login' component={Login} />
		<Route path='/register' component={Register} />
	</Switch>
);

export default Routes;
