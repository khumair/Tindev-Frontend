import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'react-bootstrap'

import CustomSvgIcon from '../../components/CustomSvgIcon'
import CustomButton from '../../components/CustomButton'
import starsLady from '../../media/standing-lady.svg'
import FormContainer from '../../components/FormContainer'
import './EmailVerification.scss'

type SetCode = {
  
  first: any,
  second: any, 
  third: any, 
  fourth: any,
}

const EmailVerification = ({ history }: any) => {
  const [code, setCode] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
  })

  const dispatch = useDispatch()

  const email = 'duy@abc.com'

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {value, name} = e.currentTarget
    console.log(value, name)
    /* @ts-ignore */
    setCode((prevValue: SetCode) => {
      return {
        ...prevValue, 
        [name]: value
      }
    })
  }

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('verify')
    // dispatch()
    history.push('/login')
  }

  const handleResend = () => {
    console.log('resend')
  }

  return (
    <>
      <FormContainer>
        <div className="text-center py-2">
          <h3 className="email-verify">Email Verification</h3>
          <p className="email">Email verification for {email} </p>
          <h4 className="check-out">Please check out your mail and enter verification code:</h4>
        </div>
        <Form onSubmit={submitHandler}>
          <div className="verification text-center">
            <input name="first" onChange={handleChange} value={code.first} className="verification-code"></input>
            <input name="second" onChange={handleChange} value={code.second} className="verification-code"></input>
            <input name="third" onChange={handleChange} value={code.third} className="verification-code"></input>
            <input name="fourth" onChange={handleChange} value={code.fourth} className="verification-code"></input>
          </div>
          <div className="verification text-center">
            <CustomButton 
              type="submit"
              text="Send verification code"
              className="verification-button btn btn-dark btn-lg"
            />
          </div>
        </Form>
        <div className="verification__button text-center">
          <p className="new-code text-center">Didn't receive the verification code?</p>
          <CustomButton 
            type="submit"
            text="Get new verification code"
            className="resend btn btn-light btn-lg"
            onClick={handleResend}
          />
        </div>
      </FormContainer>
      <CustomSvgIcon img={starsLady}/>
    </>
  )
}

export default EmailVerification