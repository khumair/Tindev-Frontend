import React from 'react'
import { Form, Col, Row, Container, Button, Image } from 'react-bootstrap'
import DateSelector from '../DateSelector'
//import uploadImage from '../../media/upload-Image.png'

const CompanyProfile = () => {
  return (
    <Container fluid="md">
      <h2 className="row justify-content-center">Company Profile</h2>
      <Row>
        <Col xs>
          <Form>
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
                  placeholder="Company Name"
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
                <Form.Control as="textarea" rows={4} />
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
                  placeholder="Typescript"
                />
              </Col>
            </Form.Group>

            <Form.Group
              className="form-group-set"
              as={Row}
              controlId="formElement"
            >
              <Form.Label column sm="4">
                Nice to have
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  className="text-field"
                  type="text"
                  placeholder="JavaScript"
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
                {/* <Form.Control
                  className="text-field"
                  type="text"
                  placeholder="29/12/2020"
                /> */}
                <DateSelector />
              </Col>
            </Form.Group>
          </Form>
          <Button className="btn-form" size="lg" block>
            {' '}
            Save
          </Button>
        {/* </Col> */}
        {/* <Col className="upload-image">
          <Image src={uploadImage} /> <br />
          <div className="btn btn-primary">
            Upload
            <Form.File type="file" name="file" className="upload-btn" />
          </div> */}
          {/* <Button className="btn-upload mt-4">Upload</Button> */}
          {/* <Form.File id="exampleFormControlFile1"  className="btn-upload mt-4"/> */}
        </Col>
      </Row>
    </Container>
  )
}
export default CompanyProfile
