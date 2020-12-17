import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EditProfile from './pages/EditProfile';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';

const Routes = () => (
	<Switch>
		<Route exact path='/' component={Landing} />
		<Route path='/login' component={Login} />
		<Route path='/register' component={Register} />
		<Route path='/edit-profile' component={EditProfile} />
	</Switch>
);

export default Routes;
