import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { Container, Form, Row, Col } from 'react-bootstrap'

import CustomSvgIcon from '../../components/CustomSvgIcon'
import starsLady from '../../media/standing-lady.svg'
import NavBar from '../../components/NavBar'
import Loader from '../../components/Loader'

import CustomButton from '../../components/CustomButton'

const Login = () => {
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
      <Container className="container">
        <NavBar />
        <Row className="justify-content-md-center">
          <Col xs={12} md={4}>
            <h2 className="text-center my-5">Sign in</h2>
            {/* {error && <Message variant="danger">{error}</Message>} */}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="email">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="my-4"
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="my-4"
                ></Form.Control>
              </Form.Group>

              <CustomButton text="Login" className="my-3" />
            </Form>
            <Row className="my-2">
              <Col className="new-user my-2">
                New User?{' '}
                <Link className=" purple-text" to="/register">
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
