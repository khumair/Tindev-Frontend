import { Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import EditProfile from './pages/EditProfile';
import EmailVerification from './pages/EmailVerification';

const Routes = () => (
	<Switch>
		<Route exact path='/' component={Landing} />
		<Route path='/login' component={Login} />
		<Route path='/register' component={Register} />
		<Route path='/verify' component={EmailVerification} />
		<Route path='/edit-profile' component={EditProfile} />
	</Switch>
);

export default Routes;
