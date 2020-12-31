import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import CustomSvgIcon from '../../components/CustomSvgIcon'
import starsLady from '../../media/standing-lady.svg'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import FormContainer from '../../components/FormContainer'

import CustomButton from '../../components/CustomButton'
import {
  loginEmployerRequest,
  loginJobSeekerRequest,
} from '../../redux/actions/'
import './Login.scss'
import { AppState } from '../../redux/types'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()

  const employer = useSelector((state: AppState) => state.employer)
  const jobSeeker = useSelector((state: AppState) => state.jobSeeker)
  const { loading, error } = jobSeeker || employer

  // useEffect(() => {
  // 	if (userInfo) {
  // 		history.push(redirect)
  // 	}
  // }, [history, userInfo, redirect])

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    if (employer) {
      dispatch(loginEmployerRequest(email, password))
      history.push('/employer/homepage')
    } else if (jobSeeker) {
      dispatch(loginJobSeekerRequest(email, password))
      history.push('/jobSeeker/homepage')
    }
  }

  return (
    <div>
      <FormContainer>
        <h2 className="signin">Sign In To TinDev</h2>
        {error && <Message variant="danger">{error}</Message>}
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
              value={password}
              onChange={e => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <CustomButton text="Login" />
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
