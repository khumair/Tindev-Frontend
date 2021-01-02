import React from 'react'
import { useParams } from 'react-router-dom'
import { Form, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../../redux/types'
import userImg from '../../media/user-img.svg'
import HalfCircle from '../../components/HalfCircle'
import CustomButton from '../../components/CustomButton'
import { fetchJobseekerRequest } from '../../redux/actions/jobseeker'
import Message from '../../components/Message'
import Loader from '../../components/Loader'

const EditProfile = () => {
  const [state, setState] = React.useState({
    id: '',
    firstName: '',
    lastName: '',
    contact: '',
    seniority: '',
  })

  const dispatch = useDispatch()

  const credentials = useSelector(
    (state: AppState) => state.jobseeker.credentials
  )
  const loading = useSelector((state: AppState) => state.jobseeker.loading)
  const error = useSelector((state: AppState) => state.jobseeker.error)

  const jobseekerId = useParams() as string
  console.log('jobseekerId', jobseekerId)

  React.useEffect(() => {
    try {
      dispatch(fetchJobseekerRequest(jobseekerId))
    } catch (error) {
      console.log('Error::>', error)
    }
  }, [dispatch, jobseekerId])

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target
    const value = (target as HTMLInputElement).value
    const name = (target as HTMLInputElement).name

    setState({
      ...state,
      [name]: value,
    })
  }

  const { firstName, lastName, contact, seniority } = credentials

  return (
    <>
      <HalfCircle inputText="Education & Experiences" />
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form
        onChange={(e: React.FormEvent<HTMLFormElement>) => handleChange(e)}
        className="container p-5 my-5"
      >
        <div className="d-flex">
          <div className="personal-form">
            <Form.Group as={Row} controlId="formHorizontalFName">
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="firstName"
                  value={firstName}
                  placeholder="First name"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalLName">
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="lastName"
                  value={lastName}
                  placeholder="Last name"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalContact">
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="contact"
                  value={contact}
                  placeholder="Contact"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalSeniority">
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="seniority"
                  value={seniority}
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
                  name="formVerticalRadios"
                  id="formVerticalRadios1"
                  value="relocatable"
                  className="pr-4"
                />
                <Form.Check
                  type="radio"
                  label="No"
                  value="notRelocatable"
                  name="formVerticalRadios"
                  id="formVerticalRadios2"
                />
              </Col>
            </Form.Group>
          </div>
          <div className="m-auto hide-sm">
            <img src={userImg} alt="userImg-svg" />
            <br />
            <CustomButton text="Upload" className="my-2 py-2" />
          </div>
        </div>
        <Form.Label as="legend" column sm={2} className="ml-n3">
          Education
        </Form.Label>
        <Form.Row>
          <Col sm={6} className="p-2">
            <Form.Control placeholder="Name of Degree" name="degreeName" />
          </Col>
          <Col sm={6} className="p-2">
            <Form.Control
              placeholder="University / School"
              name="institutionName"
            />
          </Col>
        </Form.Row>

        <p>+ Add more</p>

        <Form.Label as="legend" column sm={2} className="ml-n3">
          Skills
        </Form.Label>
        <Form.Row>
          <Col className="p-2">
            <Form.Control name="skills" placeholder="skills comes in here" />
          </Col>
        </Form.Row>
        <br />
        <Form.Label as="legend" column sm={4} className="ml-n3">
          Work Experience
        </Form.Label>
        <br />

        <Form.Label as="legend" column sm={2}>
          Level
        </Form.Label>
        <Form.Row>
          <Col sm={4} className="px-2">
            <Form.Control name="skillLevel" placeholder="Skill level" />
          </Col>
        </Form.Row>
        <Form.Label as="legend" column sm={2}>
          Experience
        </Form.Label>
        <Form.Row>
          <Col sm={4} className="px-2">
            <Form.Control name="duration" placeholder="Duration" />
          </Col>
        </Form.Row>
        <br />
        <CustomButton text="Update" className="my-2 py-2 btn-lg" />
      </Form>
    </>
  )
}

export default EditProfile
