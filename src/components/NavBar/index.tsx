import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import { logoutJobSeeker } from '../../redux/actions/jobseeker'
import { logoutEmployer } from '../../redux/actions/employer'
import { AppState } from '../../redux/types'
import './NavBar.scss'

const NavBar = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const employerCredentials = useSelector(
    (state: AppState) => state.employer.credentials
  )
  const jobSeekerCredentials = useSelector(
    (state: AppState) => state.jobSeeker.credentials
  )
  const credentials = employerCredentials || jobSeekerCredentials

  const handleLogout = () => {
    console.log(credentials)
    if (jobSeekerCredentials) {
      dispatch(logoutJobSeeker())
    } else if (employerCredentials) {
      dispatch(logoutEmployer())
    }
    history.push('/')
  }

  return (
    <Navbar expand="lg" collapseOnSelect className="navbar">
      <LinkContainer to="/">
        <Navbar.Brand>TinDev</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {credentials && (
            <LinkContainer to="/register">
              <Nav.Link>
                <i className="register"></i>Register
              </Nav.Link>
            </LinkContainer>
          )}
          {!credentials ? (
            <NavDropdown title="profile" id="credentials">
              <LinkContainer to="/profileJobSeeker">
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <LinkContainer to="/login">
              <Nav.Link>
                <i className="fas fa-user"></i>Login
              </Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
