import React from "react";
import { Form, Col, Row, Container, Button, Image } from "react-bootstrap";
import uploadImage from "../../assets/images/upload-Image.png";
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
                Company Name
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
                Address
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  className="text-field"
                  type="text"
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
              className="form-group-set"
              as={Row}
              controlId="formElement"
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
                WebSite
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  className="text-field"
                  type="text"
                  placeholder="http://www.company.com"
                />
              </Col>
            </Form.Group>
          </Form>
          <Button className="btn-form" size="lg" block>
            {" "}
            Save
          </Button>
        </Col>
        <Col className="colcenter">
          <Image src={uploadImage} /> <br />
          <Button className="btn-upload mt-4">Upload</Button>
        </Col>
      </Row>
    </Container>
  );
};
export default CompanyProfile;
