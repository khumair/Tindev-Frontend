import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Col } from 'react-bootstrap'

import HalfCircle from '../../components/HalfCircle'
import CustomSvgIcon from '../../components/CustomSvgIcon'
import starsLady from '../../media/star-lady.svg'
import CustomButton from '../../components/CustomButton'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { registerEmployerRequest } from '../../redux/actions/employerActions'
import { AppState } from '../../types'

const Register = () => {
  const [validated, setValidated] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  // const employerRegister = useSelector((state: AppState) => state.employerRegister)
  // const { loading, error, credentials } = employerRegister

  const dispatch = useDispatch()

  const handleSubmit = (event: React.FormEvent) => {
    console.log('clicked')
    // if (form.checkValidity() === false) {
       event.preventDefault()
    //   event.stopPropagation()
    // }

    // setValidated(true)

    
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
    <>
      <HalfCircle inputText='Welcome' />
      <h3 className='text-center my-5'>Sign up</h3>
      {message && <Message variant='danger'>{message}</Message>}
      {/* {error && <Message variant='danger'>{error}</Message>}
			{loading && <Loader />} */}
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className='container'
      >
        <Form.Row>
          <Form.Group as={Col} sm='8' controlId='validationCustomEmail'>
            <Form.Control
              required
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type='invalid'>
              eMail is required
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} sm='8' controlId='validationCustomPassword'>
            <Form.Control
              required
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Control.Feedback type='invalid'>
              Password is required
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group
            as={Col}
            sm='8'
            controlId='validationCustomConfirmPassword'
          >
            <Form.Control
              required
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Form.Control.Feedback type='invalid'>
              Passwords does not match!
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <CustomButton text='Submit' className='my-3' />

        <p>
          Already a member? <Link to='/login'>Sign In</Link>
        </p>
      </Form>
      <CustomSvgIcon img={starsLady} />
    </>
  )
}

export default Register
