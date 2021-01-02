import React from 'react'
import { Form, Col, Row, Container, Button, Image } from 'react-bootstrap'
import uploadImage from '../../media/upload-Image.png'
import DatePicker from './DatePicker'

const JopPost = () => {
  return (
    <Container fluid="md">
      <h2 className="row justify-content-center">Job Post</h2>
      <Row className="job-post-row">
        <Col xs>
          <Form>
            <Form.Group
              className="form-group-set"
              as={Row}
              controlId="formElement"
            >
              <Form.Label column sm="4">
                Job
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  className="text-field"
                  type="text"
                  placeholder="Comapny Name"
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
                <Form.Control className="text-field" type="text" />
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
                <Form.Control className="text-field" type="text" />
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
