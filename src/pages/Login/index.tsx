import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Form, Row, Col } from 'react-bootstrap'

import CustomSvgIcon from '../../components/CustomSvgIcon'
import starsLady from '../../media/standing-lady.svg'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import FormContainer from '../../components/FormContainer'

import CustomButton from '../../components/CustomButton'
import { loginEmployerRequest } from '../../redux/actions/employer'
import { loginJobseekerRequest } from '../../redux/actions/jobseeker'

import { AppState } from '../../redux/types'
//import { employerInfoFromStorage } from '../../redux/saga/employer'
import { jobseekerInfoFromStorage } from '../../redux/saga/jobseeker'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setLoggedIn] = useState(false)

  const dispatch = useDispatch()
  const history = useHistory()

  const employer = useSelector((state: AppState) => state.employer)
  const jobseeker = useSelector((state: AppState) => state.jobseeker)
  const jobseekerError = useSelector((state: AppState) => state.jobseeker.error)
  const jobseekerLoader = useSelector(
    (state: AppState) => state.jobseeker.loading
  )
  const employerError = useSelector((state: AppState) => state.employer.error)
  const employerLoader = useSelector(
    (state: AppState) => state.employer.loading
  )
  //const { loading, error } = jobseeker || employer

  useEffect(() => {
    setLoggedIn(true)
  }, [isLoggedIn])

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    if (employer) {
      dispatch(loginEmployerRequest(email, password))
      // if (employerInfoFromStorage) {
      //   setLoggedIn(true)
      //   history.push('/company/profile')
      // }
    } else if (jobseeker) {
      dispatch(loginJobseekerRequest(email, password))
      if (jobseekerInfoFromStorage) {
        setLoggedIn(true)
        history.push('/jobseeker/match')
      }
    } else {
      setLoggedIn(false)
    }
  }

  return (
    <div>
      <FormContainer>
        <h2 className="signin text-center purple-text">Signin to TinDev</h2>
        {employerError && <Message variant="danger">{employerError}</Message>}
        {employerLoader && <Loader />}
        {jobseekerError && <Message variant="danger">{jobseekerError}</Message>}
        {jobseekerLoader && <Loader />}
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
              value={password}
              onChange={e => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <CustomButton text="Login" className="login-button" />
        </Form>
        <Row className="forgot-password py-3">
          <Col>
            <Link className="forgot-password" to="/reset-password">
              Forgot your password?
            </Link>
          </Col>
        </Row>
        <Row className="new-user">
          <Col>
            New User?{' '}
            <Link className="register" to="/register">
              Register
            </Link>
          </Col>
        </Row>
      </FormContainer>
      <CustomSvgIcon img={starsLady} />
    </div>
  )
}

export default Login
