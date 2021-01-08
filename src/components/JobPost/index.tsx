import React, { useState } from 'react'
import { Form, Col, Row, Container, Button, Image } from 'react-bootstrap'
import uploadImage from '../../media/upload-Image.png'
import DatePicker from '../DatePicker'
import { useDispatch } from 'react-redux'
import { creatingJobPostRequest } from '../../redux/actions/jobpost'

const JopPost = () => {
  const [state, setState] = useState({
    jobTitle: '',
    jobDescription: '',
    skills: [],
    city: '',
    country: '',
  })

  const dispatch = useDispatch()
  const handelChange = (e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target
    const value = (target as HTMLInputElement).value
    const name = (target as HTMLInputElement).name

    setState({
      ...state,
      [name]: value,
    })
  }
  const { jobTitle, jobDescription, skills, city, country } = state

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const jobPosted = {
      jobTitle,
      jobDescription,
      city,
      country,
      skills,
    }
    dispatch(creatingJobPostRequest(jobPosted))
  }
  return (
    <Container fluid="md">
      <h2 className="row justify-content-center">Job Post</h2>
      <Row className="job-post-row">
        <Col xs>
          <Form onSubmit={e => handleSubmit(e)} onChange={e => handelChange(e)}>
            <Form.Group
              className="form-group-set"
              as={Row}
              controlId="formElement"
            >
              <Form.Label column sm="4">
                Job Title
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  className="text-field"
                  type="text"
                  name="jobTitle"
                  placeholder="Job Title"
                />
              </Col>
            </Form.Group>

            <Form.Group
              className="form-group-set"
              as={Row}
              controlId="formElement"
            >
              <Form.Label column sm="4">
                Job Description
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  className="text-field"
                  as="textarea"
                  name="jobDescription"
                  rows={4}
                  placeholder="Address"
                />
              </Col>
            </Form.Group>

            <Form.Group
              className="form-group-set"
              as={Row}
              controlId="formElement"
            >
              <Form.Label column sm="4">
                Required Skills
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  className="text-field"
                  type="text"
                  name="requiredSkills"
                ></Form.Control>
              </Col>
            </Form.Group>
            <Form.Group
              className="form-group-set"
              as={Row}
              controlId="formElement"
            >
              <Form.Label column sm="4">
                Nice to Have
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  className="text-field"
                  type="text"
                  name="niceToHave"
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="form-group-set"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="4">
                Country
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  className="text-field"
                  type="text"
                  placeholder="Finland"
                  name="country"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="form-group-set"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="4">
                City
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  className="text-field"
                  type="text"
                  placeholder="Helsinki"
                  name="city"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="form-group-set"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="4">
                Starting At
              </Form.Label>
              <Col sm="8">
                <DatePicker />
              </Col>
            </Form.Group>
          </Form>
          <Button className="btn-form" size="lg" block>
            {' '}
            Save
          </Button>
        </Col>
        <Col className="colcenter upload-image">
          <Image src={uploadImage} /> <br />
          <Button className="btn-upload mt-4">Add Logo</Button>
        </Col>
      </Row>
    </Container>
  )
}
export default JopPost
