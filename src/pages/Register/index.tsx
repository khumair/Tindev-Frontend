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
  const jobSeekerError = useSelector((state: AppState) => state.jobSeeker.error)
  const jobSeekerLoader = useSelector(
    (state: AppState) => state.jobSeeker.loading
  )
  const employerError = useSelector((state: AppState) => state.employer.error)
  const employerLoader = useSelector(
    (state: AppState) => state.employer.loading
  )

  const dispatch = useDispatch()

  const handleCompany = (event: React.FormEvent) => {
    event.preventDefault()
    setRole(employer)
  }

  const handleSeeker = (event: React.FormEvent) => {
    event.preventDefault()
    setRole(jobSeeker)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const info = {}
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else if (role === employer) {
      dispatch(registerEmployerRequest(info, email, password))
    } else if (role === jobSeeker) {
      dispatch(registerJobSeekerRequest(info, email, password))
    }
  }

  return (
    <>
      <FormContainer>
        <HalfCircle inputText="Welcome" />
        <h3 className="text-center my-5">Sign up</h3>
        {message && <Message variant="danger">{message}</Message>}
        {employerError && <Message variant="danger">{employerError}</Message>}
        {employerLoader && <Loader />}
        {jobSeekerError && <Message variant="danger">{jobSeekerError}</Message>}
        {jobSeekerLoader && <Loader />}
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
