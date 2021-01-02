import { Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import EmailVerification from './pages/EmailVerification'
import JobSeeker from './pages/JobSeeker'
import EditProfile from './pages/EditProfile'
import PWReset from './pages/PWReset'
import Profile from './pages/Profile'
import CompanyProfile from './components/CompanyProfile'
import CompanyHomePage from './components/CompanyHomePage'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/verify" component={EmailVerification} />
    <Route exact path="/job-seeker" component={JobSeeker} />
    <Route exact path="/edit-jobseeker-profile" component={EditProfile} />
    <Route exact path="/reset-password" component={PWReset} />
    <Route exact path="/job-seeker/profile" component={Profile} />
    <Route exact path="/company/profile" component={CompanyProfile} />
    <Route exact path="/company/CompanyHomePage" component={CompanyHomePage} />
  </Switch>
)

export default Routes
