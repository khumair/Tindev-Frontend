import React, { useState } from 'react'
import { Container, Button, Image } from 'react-bootstrap'

type SetCode = {
  
  first: any,
  second: any, 
  third: any, 
  fourth: any,
}

const EmailVerification = () => {
  const [code, setCode] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
  })

  const email = 'duy@abc.com'

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {value, name} = e.currentTarget
    console.log(value, name)
    /* @ts-ignore */
    setCode((prevValue: SetCode) => {
      if (name === 'first') {
        return {
          first: value,
          second: prevValue.second,
          third: prevValue.third,
          fourth: prevValue.fourth,
        }
      } else if (name === 'second') {
        return {
          first: prevValue.first, 
          second: value, 
          third: prevValue.third, 
          fourth: prevValue.fourth,
        }
      } else if (name === 'third') {
        return {
          first: prevValue.first, 
          second: prevValue.second, 
          third: value, 
          fourth: prevValue.fourth,
        } 
      } else if (name === 'fourth') {
        return {
          first: prevValue.first, 
          second: prevValue.second, 
          third: prevValue.third, 
          fourth: value,
        }
      }
    })
  }

  const handleVerification = () => {
    console.log('verified')
  }

  const handleResend = () => {
    console.log('resend')
  }

  return (
    <>
    <Container>
      <div className="text-center py-2">
        <h3 className="email-verify">Email Verification</h3>
        <p className="email">Email verification for {email} </p>
        <h4>Please check out your mail and enter verification code:</h4>
      </div>
      <div className="verification text-center">
        <input name="first" onChange={handleChange} value={code.first} className="verification-code"></input>
        <input name="second" onChange={handleChange} value={code.second} className="verification-code"></input>
        <input name="third" onChange={handleChange} value={code.third} className="verification-code"></input>
        <input name="fourth" onChange={handleChange} value={code.fourth} className="verification-code"></input>
      </div>
      <div className="text-center">
        <div className="verification">
          <Button onClick={handleVerification} className="verification__button btn btn-dark btn-lg">Send verification code</Button>
        </div>
        <p className="new-code text-center">Didn't receive the verification code?</p>
        <div className="verification__resend-button text-center resend">
          <Button onClick={handleResend} className="btn btn-light btn-lg">Get new verification code</Button>
        </div>
      </div>
    </Container>
    <Container>
      <Image></Image>
    </Container>
    </>
  )
}

export default EmailVerification