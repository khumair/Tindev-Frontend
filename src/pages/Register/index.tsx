import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Col, Button } from 'react-bootstrap'

import HalfCircle from '../../components/HalfCircle'
import CustomSvgIcon from '../../components/CustomSvgIcon'
import starsLady from '../../media/star-lady.svg'
import CustomButton from '../../components/CustomButton'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import {
  registerEmployerRequest,
  registerJobSeekerRequest,
} from '../../redux/actions/'
import { AppState } from '../../redux/types'
import FormContainer from '../../components/FormContainer'
import './Register.scss'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [role, setRole] = useState({})

  const employer = useSelector((state: AppState) => state.employer)
  const jobSeeker = useSelector((state: AppState) => state.jobSeeker)
  const { loading, error } = jobSeeker || employer

  const dispatch = useDispatch()

  const handleCompany = () => {
    setRole(employer)
  }

  const handleSeeker = () => {
    setRole(jobSeeker)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else if (role === employer) {
      dispatch(registerEmployerRequest(email, password))
    } else if (role === jobSeeker) {
      dispatch(registerJobSeekerRequest(email, password))
    }
  }

  return (
    <>
      <FormContainer>
        <HalfCircle inputText="Welcome" />
        <h3 className="text-center my-5">Sign up</h3>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={handleSubmit} className="container">
          <Button className="employer-role" onClick={handleCompany}>
            I am an employer
          </Button>
          <Button onClick={handleSeeker}>I am a jobseeker</Button>
          <Form.Row>
            <Form.Group as={Col} controlId="validationCustomEmail">
              <Form.Control
                required
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Email is required
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="validationCustomPassword">
              <Form.Control
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Password is required
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="validationCustomConfirmPassword">
              <Form.Control
                required
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Passwords does not match!
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <CustomButton text="Submit" className="my-3" />

          <p>
            Already a member? <Link to="/login">Sign In</Link>
          </p>
        </Form>
      </FormContainer>
      <CustomSvgIcon img={starsLady} />
    </>
  )
}

export default Register
