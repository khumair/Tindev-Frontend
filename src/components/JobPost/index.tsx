import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, /*Image,*/ ListGroup } from 'react-bootstrap'

import JobPostRow from '../JobPostRow'
import Skill from '../Skill'
import icon from '../../media/user-img.svg'
import CompanyIcon from '../CompanyIcon'
import './JobPost.scss'
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
        <Col md={8}>
          <JobPostRow name="Title" item={title} />
          <JobPostRow name="Job Description" item={jobDescription} />
          <JobPostRow name="Seniority" item={seniority} />
          <JobPostRow name="Starting Date" item={startingDate} />
          <Row>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Required Skills:
                <Skill skills={skills} />
              </ListGroup.Item>
            </ListGroup>
          </Row>
        </Col>
        <Col className="edit" md={2}>
          <Link to="/company/jobpost/:id">EDIT</Link>
        </Col>
      </Row>
    </>
  )
}

export default JobPost
