import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import LogOut from '../LogOut'

const NavBar = () => {
  const isAuthenticated = true // temporarily included. Will be after confirmation of authentication from backend team.

  return (
    <Navbar bg="light" expand="lg" className="justify-content-between mx-5">
      <Navbar.Brand href="/">TinDev</Navbar.Brand>
      <Nav>
        {isAuthenticated ? (
          <Nav.Link href="/">
            <LogOut />
          </Nav.Link>
        ) : null}
      </Nav>
    </Navbar>
  )
}

export default NavBar
