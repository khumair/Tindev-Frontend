import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, /*Image,*/ ListGroup } from 'react-bootstrap'

import Skill from '../Skill'
import icon from '../../media/user-img.svg'
import CompanyIcon from '../CompanyIcon'
import { AppState } from '../../redux/types'

const JobPost = () => {
  const jobPost = useSelector((state: AppState) => state.resources.jobPost)
  const { title, jobDescription, seniority, startingDate, skills } = jobPost

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
              <ListGroup.Item className="">
                <Link to="/company/jobpost/:id">Title: {title}</Link>
              </ListGroup.Item>
            </ListGroup>
          </Row>
          <Row>
            <ListGroup variant="flush">
              <ListGroup.Item>Job Description: {jobDescription}</ListGroup.Item>
            </ListGroup>
          </Row>
          <Row>
            <ListGroup variant="flush">
              <ListGroup.Item>Seniority: {seniority}</ListGroup.Item>
            </ListGroup>
          </Row>
          <Row>
            <ListGroup variant="flush">
              <ListGroup.Item>Starting Date: {startingDate}</ListGroup.Item>
            </ListGroup>
          </Row>
          <Row>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Required Skills:
                <Skill skills={skills} />
              </ListGroup.Item>
            </ListGroup>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default JobPost
