import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Col, Row, Container, Button } from 'react-bootstrap'
import DatePicker, { DayValue } from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'

import { updateEmployerRequest } from '../../redux/actions/employer'
import {
  creatingJobPostRequest,
  updateJobPostRequest,
} from '../../redux/actions/jobpost'
//import { AppState } from '../../redux/types'

type SetJobPost = {
  companyName: string
  jobTitle: string
  jobDescription: string
  requiredSkills: string
}

const CompanyProfileForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    jobDescription: '',
    requiredSkills: '',
  })

  const [startingAt, setStartingAt] = useState<DayValue>(null)
  const year = new Date().getFullYear.toString().substr(-2)
  const range = parseInt(year)

  const maximumDate = {
    year: range + 1,
    month: 12,
    day: 31,
  }

  const dispatch = useDispatch()

  //const jobPostInfo = useSelector((state: AppState) => state.employer)
  //const { loading, error } = jobPostInfo

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    setFormData((prevValue: SetJobPost) => {
      return {
        ...prevValue,
        [name]: value,
      }
    })
  }

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData) {
      dispatch(creatingJobPostRequest(formData))
    } else {
      dispatch(updateEmployerRequest(formData.companyName))
      dispatch(updateJobPostRequest(formData))
    }
  }

  return (
    <Container fluid="md">
      <h2 className="purple-text">Company Profile</h2>
      <Row>
        <Col xs>
          <Form onSubmit={submitHandler}>
            <Form.Group
              className="form-group-set"
              as={Row}
              controlId="formElement"
            >
              <Form.Label column sm="4">
                Company Name
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  className="text-field"
                  type="text"
                  name="companyName"
                  placeholder="Company name"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
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
                  value={formData.jobTitle}
                  onChange={handleChange}
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
                  as="textarea"
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleChange}
                  rows={4}
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
                  placeholder="Typescript"
                  value={formData.requiredSkills}
                  onChange={handleChange}
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
                  placeholder="Country"
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
                  placeholder="City"
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
                <DatePicker
                  value={startingAt}
                  onChange={setStartingAt}
                  inputPlaceholder="Select starting day"
                  maximumDate={maximumDate}
                  colorPrimary="#000"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="form-group-set" controlId="button">
              <Form.Label column sm="4"></Form.Label>
              <Col sm="8">
                <Button
                  type="submit"
                  className="purple-btn w-50 mt-5"
                  size="lg"
                >
                  Save
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
export default CompanyProfileForm
