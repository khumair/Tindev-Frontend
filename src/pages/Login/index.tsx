import React, { useState, useEffect } from 'react'
//import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'

import CustomSvgIcon from '../../components/CustomSvgIcon'
import starsLady from '../../media/standing-lady.svg'
import NavBar from '../../components/NavBar'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import FormContainer from '../../components/FormContainer'
import CustomButton from '../../components/CustomButton'
//import { login } from '../../redux/actions/userActions'
import './Login.scss'

const Login = ({ history }: any) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const login = 'Login'

	//const dispatch = useDispatch()

	//const login = useSelector((state) => state.login)
	// const { loading, error, userInfo } = login

	const userInfo = {email: 'duy@abc.com', password: '12345'}
	const error = 'no no no'
	const loading = false
	
	// useEffect(() => {
	// 	if (userInfo) {
	// 		history.push(redirect)
	// 	}
	// }, [history, userInfo, redirect])

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault()
		// dispatch login(email, password)
	}

	return (
	<div>
		<NavBar />
		<FormContainer>
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
						onChange={(e) => setEmail(e.target.value)}
					></Form.Control>
				</Form.Group>
				<Form.Group controlId="password">
					<Form.Label className="label">PASSWORD</Form.Label>
					<Form.Control 
						type="password" 
						placeholder="Enter password" 
						value={password} 
						onChange={(e) => setPassword(e.target.value)}
					></Form.Control>
				</Form.Group>
				<CustomButton text={login} />
			</Form>
			<Row className="forgot-password">
				<Col>
					<Link className="forgot-password" to='/reset-password'>Forgot your password?</Link>
				</Col>
			</Row>
			<Row className="new-user">
				<Col>
				New User? <Link className="register" to='/register'>Register</Link>
				</Col>
			</Row>
		</FormContainer>
		<CustomSvgIcon img={starsLady} />
	</div>
	)
}	

export default Login
