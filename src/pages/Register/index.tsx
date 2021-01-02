import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Col, Container, Row } from 'react-bootstrap'

import HalfCircle from '../../components/HalfCircle'
import CustomSvgIcon from '../../components/CustomSvgIcon'
import starsLady from '../../media/star-lady.svg'
import CustomButton from '../../components/CustomButton'

import Message from '../../components/Message'
import { registerEmployerRequest } from '../../redux/actions'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  const submitHandler = (event: React.FormEvent) => {
    console.log('clicked')

    event.preventDefault()

    const credentials = {
      email: email,
      password: password,
    }
    console.log('credentials', credentials)
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(registerEmployerRequest(credentials))
    }
  }

  return (
    <div className="container">
      <HalfCircle inputText="Welcome" />
      <h3 className="text-center my-5">Register</h3>
      {message && <Message variant="danger">{message}</Message>}
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={4}>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="email">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
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

              <Form.Group controlId="password">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <CustomButton text="Register" className="my-3" />
            </Form>
            <Row className="my-2">
              <Col>
                Already a member? {''}
                <Link className="purple-text" to="/login">
                  Login
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

export default Register
