import { Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import JobSeeker from './components/MatchCardJobseeker'
import PWReset from './pages/PWReset'
import ViewJobseeker from './pages/ViewJobseeker'
import CompanyProfile from './pages/CompanyProfile'
import JobseekerProfile from './pages/JobseekerProfile'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/jobseeker/match" component={JobSeeker} />
    <Route exact path="/reset-password" component={PWReset} />
    <Route exact path="/jobseeker/view" component={ViewJobseeker} />
    <Route exact path="/company/profile" component={CompanyProfile} />
    <Route exact path="/jobseeker/profile" component={JobseekerProfile} />
  </Switch>
)

export default Routes
