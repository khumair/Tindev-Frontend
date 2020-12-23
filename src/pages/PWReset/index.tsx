import React from 'react'

import CustomSvgIcon from '../../components/CustomSvgIcon'
import CustomButton from '../../components/CustomButton'
import starsLady from '../../media/star-lady.svg'
import { Form, Col } from 'react-bootstrap'
import FormContainer from '../../components/FormContainer'

const PWReset = () => {
  return (
    <div className='container'>
      <FormContainer>
        <h2 className='text-center my-5'>Reset Password</h2>
        <Form noValidate>
          <label htmlFor='new-pw' className='form-label'>
            New Password
          </label>
          <Form.Row>
            <Form.Group as={Col} controlId='newPassword'>
              <Form.Control required type='password' />
            </Form.Group>
          </Form.Row>

          <label htmlFor='new-pw' className='form-label'>
            Repeat Password
          </label>
          <Form.Row>
            <Form.Group as={Col} controlId='repeatPassword'>
              <Form.Control required type='password' />
            </Form.Group>
          </Form.Row>

          <CustomButton text='Submit' className='btn-lg my-3' />
        </Form>
      </FormContainer>
      <CustomSvgIcon img={starsLady} />
    </div>
  )
}

export default PWReset
