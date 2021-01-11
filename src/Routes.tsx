import { Switch, Route } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Login from './pages/Login'
import PWReset from './pages/PWReset'
import Landing from './pages/Landing'
import Register from './pages/Register'
import ViewJobseeker from './pages/ViewJobseeker'
import CompanyProfile from './pages/CompanyProfile'
import JobseekerProfile from './pages/JobseekerProfile'

const Routes = () => (
  <Route
    render={({ location }) => (
      <TransitionGroup className="app">
        <CSSTransition key={location.key} timeout={300} classNames="fade">
          <Switch location={location}>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/reset-password" component={PWReset} />
            <Route
              exact
              path="/match/view/applicant/:id"
              component={ViewJobseeker}
            />
            <Route exact path="/company/profile" component={CompanyProfile} />
            <Route
              exact
              path="/jobseeker/profile"
              component={JobseekerProfile}
            />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )}
  />
)

export default Routes
