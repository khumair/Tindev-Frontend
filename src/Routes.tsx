import { Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import JobSeeker from './pages/JobSeeker'
import EditProfile from './pages/EditProfile'
import PWReset from './pages/PWReset'
import Profile from './pages/Profile'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/job-seeker" component={JobSeeker} />
    <Route exact path="/edit-jobseeker-profile" component={EditProfile} />
    <Route exact path="/reset-password" component={PWReset} />
    <Route exact path="/job-seeker/profile" component={Profile} />
  </Switch>
)

export default Routes
