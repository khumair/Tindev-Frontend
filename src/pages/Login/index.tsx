import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'

import CustomSvgIcon from '../../components/CustomSvgIcon'
import starsLady from '../../media/standing-lady.svg'
import NavBar from '../../components/NavBar'
import Loader from '../../components/Loader'
import FormContainer from '../../components/FormContainer'
import CustomButton from '../../components/CustomButton'
//import { login } from '../../redux/actions/userActions'
import './Login.scss'

const Login = ({ history }: any) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const userInfo = { email: 'duy@abc.com', password: '12345' } // comment out due to husky verification
  // const error = 'no no no'
  const loading = false
  // use useEffect here
  // if (userInfo) {
  // 	history.push(redirect)
  // }

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(email, password)
    // dispatch login(email, password)
  }

  return (
    <div>
      <NavBar />
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={4}>
            <h2 className="signin">Sign in to TinDev</h2>
            {/* {error && <Message variant="danger">{error}</Message>} */}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="email">
                <Form.Label className="label">EMAIL</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label className="label">PASSWORD</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={email}
                  onChange={e => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button
                type="submit"
                className="signin-button"
                variant="outline-dark my-2"
              >
                Login
              </Button>
            </Form>
            <Row className="my-2">
              <Col className="new-user my-2">
                New User?{' '}
                <Link className="register" to="/register">
                  Register
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <CustomSvgIcon img={starsLady} />
    </div>
  )
}

export default Login
