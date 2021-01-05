import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import userImg from '../../media/user-img.svg'
import HalfCircle from '../../components/HalfCircle'
import CustomButton from '../../components/CustomButton'
import { updateJobseekerRequest } from '../../redux/actions/jobseeker'

// Set initial state for profile image
const initialState = { alt: 'default', src: userImg }

const EditProfile = () => {
  // Set local state for profile image upload
  const [{ alt, src }, setPreview] = React.useState(initialState)

  //Set local state for form inputs
  const [state, setState] = React.useState({
    id: '',
    firstName: '',
    lastName: '',
    phone: '',
    seniority: '',
    degreeName: '',
    institutionName: '',
    skills: [],
    skillLevel: '',
    duration: '',
  })

  // Handler for image upload
  const fileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target
    setPreview(
      files
        ? {
            src: URL.createObjectURL(files[0]),
            alt: files[0].name,
          }
        : initialState
    )
  }

  const dispatch = useDispatch()

  // Handler for form inputs
  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target
    const value = (target as HTMLInputElement).value
    const name = (target as HTMLInputElement).name

    setState({
      ...state,
      [name]: value,
    })
  }

  // Destructuring from state
  const {
    firstName,
    lastName,
    phone,
    seniority,
    degreeName,
    institutionName,
    skills,
    skillLevel,
    duration,
  } = state

  // Handler for form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const userData = {
      src,
      firstName,
      lastName,
      phone,
      seniority,
      degreeName,
      institutionName,
      skills,
      skillLevel,
      duration,
    }
    console.log('userData', userData)
    dispatch(updateJobseekerRequest(userData))
  }

  return (
    <>
      <HalfCircle inputText="Education & Experiences" />

      <Form
        onSubmit={e => handleSubmit(e)}
        onChange={e => handleChange(e)}
        className="container my-5"
      >
        <div className="top-form-container d-flex">
          <div className="personal-form">
            <Form.Group as={Row} controlId="formHorizontalFName">
              <Col>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="First name"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalLName">
              <Col>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalphone">
              <Col>
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                />
                <small>Format: 123-456-7890</small>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalSeniority">
              <Col>
                <Form.Control
                  type="text"
                  name="seniority"
                  placeholder="Seniority"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label as="legend" column className="pl-4">
                Open to Relocate?
              </Form.Label>
              <Col as={Row} className="mt-2">
                <Form.Check
                  type="radio"
                  label="Yes"
                  name="formRadios"
                  id="formRadios1"
                  value="relocatable"
                  className="pr-4"
                />
                <Form.Check
                  type="radio"
                  label="No"
                  value="notRelocatable"
                  name="formRadios"
                  id="formRadios2"
                />
              </Col>
            </Form.Group>
          </div>
          <div className="m-auto pb-5">
            <img className="preview" src={src} alt={alt} />
            <label htmlFor="imageUpload" className="customBtn btn btn-block">
              Edit
            </label>
            <input
              accept="image/*"
              type="file"
              name="preview"
              onChange={fileHandler}
              id="imageUpload"
              style={{ display: 'none' }}
            />
          </div>
        </div>
        <Form.Label as="legend" column sm={2} className="ml-n3">
          Education
        </Form.Label>
        <Form.Row>
          <Col sm={6} className="p-2">
            <Form.Control
              type="text"
              placeholder="Name of Degree"
              name="degreeName"
            />
          </Col>
          <Col sm={6} className="p-2">
            <Form.Control
              type="text"
              placeholder="University / School"
              name="institutionName"
            />
          </Col>
        </Form.Row>

        <Form.Label as="legend" column sm={2} className="ml-n3">
          Skills
        </Form.Label>
        <Form.Row>
          <Col className="p-2">
            <Form.Control name="skills" placeholder="skills comes in here" />
          </Col>
        </Form.Row>
        <br />
        <Form.Label as="legend" column className="ml-n3">
          Work Experience
        </Form.Label>
        <br />

        <Form.Label as="legend" column>
          Level
        </Form.Label>
        <Form.Row>
          <Col className="px-2">
            <Form.Control name="skillLevel" placeholder="Skill level" />
          </Col>
        </Form.Row>
        <Form.Label as="legend" column>
          Experience
        </Form.Label>
        <Form.Row>
          <Col className="px-2">
            <Form.Control name="duration" placeholder="Duration" />
          </Col>
        </Form.Row>
        <br />
        <CustomButton text="Update" className="my-3 py-2" />
      </Form>
    </>
  )
}

export default EditProfile
