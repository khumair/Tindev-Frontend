import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Col, Row, Container, Button } from 'react-bootstrap'
import { WithContext as ReactTags } from 'react-tag-input'
import DatePicker, { DayValue } from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'

import Message from '../Message'
import Loader from '../Loader'
import { creatingJobPostRequest } from '../../redux/actions/resources'
import { AppState } from '../../redux/types'

const KeyCodes = {
  comma: 188,
  enter: 13,
}

const delimiters = [KeyCodes.comma, KeyCodes.enter]

type JobPostFormProps = {
  header: string
}

const JobPostForm = ({ header }: JobPostFormProps) => {
  const [startingAt, setStartingAt] = useState<DayValue>(null)
  const [formData, setFormData] = useState({
    title: '',
    jobDescription: '',
    requiredSkills: [],
    seniority: '',
    startingDate: '',
  })

  const [state, setState] = useState({
    tags: [
      {
        id: null,
        name: '',
      },
    ],
    suggestions: useSelector((state: AppState) => state.resources.skills),
  })

  // TODO: date format
  const year = new Date().getFullYear.toString().substr(-2)
  const range = parseInt(year)

  const maximumDate = {
    year: range,
    month: 12,
    day: 31,
  }

  const user = useSelector((state: AppState) => state.user)
  const { loading, error } = user

  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    setFormData((prevValue: any) => {
      return {
        ...prevValue,
        [name]: value,
      }
    })
    setStartingAt(startingAt)
  }

  // TODO: Add condition for edit job post
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(
      creatingJobPostRequest({
        title: formData.title,
        jobDescription: formData.jobDescription,
        skills: state.tags,
        seniority: formData.seniority,
        startingDate: startingAt,
      })
    )
    setFormData({
      title: '',
      jobDescription: '',
      requiredSkills: [],
      seniority: '',
      startingDate: '',
    })
  }

  const handleDelete = (i: any) => {
    const filteredTags = state.tags.filter((tag, index) => index !== i)
    setState({ filteredTags } as any)
  }

  const handleAddition = (tag: any) => {
    setState(state => ({ tags: [...state.tags, tag], suggestions: [] }))
  }

  const handleDrag = (tag: any, currPos: any, newPos: any) => {
    const tags = [...state.tags]
    const newTags = tags.slice()

    newTags.splice(currPos, 1)
    newTags.splice(newPos, 0, tag)

    // re-render
    setState({ tags: newTags, suggestions: [] })
  }

  return (
    <Container fluid="md">
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <h2>{header}</h2>
      <Row>
        <Col xs>
          <Form onSubmit={submitHandler}>
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
                  name="title"
                  placeholder="Job Title"
                  value={formData.title}
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
                <ReactTags
                  //@ts-ignore
                  tags={state.tags}
                  suggestions={state.suggestions}
                  handleDelete={handleDelete}
                  handleAddition={handleAddition}
                  handleDrag={handleDrag}
                  delimiters={delimiters}
                />
                <Form.Group as={Row}></Form.Group>
              </Col>
            </Form.Group>
            <Form.Group
              className="form-group-set"
              as={Row}
              controlId="formElement"
            >
              <Form.Label column sm="4">
                Seniority
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  className="text-field"
                  type="text"
                  name="seniority"
                  placeholder="Seniority"
                  value={formData.seniority}
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
export default JobPostForm
