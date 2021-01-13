import React from 'react'
import { Row, Col, /*Image,*/ ListGroup } from 'react-bootstrap'

import icon from '../../media/user-img.svg'
import CompanyIcon from '../../components/CompanyIcon'

const JobPostList = () => {
  return (
    <>
      <Row>
        <Col md={2}>
          <CompanyIcon icon={icon} />
          {/* <Image 
              src={`/${user.image}`} 
              alt="company-image"
              className="image" 
              fluid /> */}
        </Col>
        <Col md={10}>
          <Row>
            <ListGroup variant="flush">
              <ListGroup.Item className="">title</ListGroup.Item>
            </ListGroup>
          </Row>
          <Row>
            <ListGroup variant="flush">
              <ListGroup.Item>description</ListGroup.Item>
            </ListGroup>
          </Row>
          <Row>
            <ListGroup variant="flush">
              <ListGroup.Item>skills</ListGroup.Item>
            </ListGroup>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default JobPostList
