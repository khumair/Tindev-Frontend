import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, /*Image,*/ ListGroup } from 'react-bootstrap'

import JobPostRow from '../JobPostRow'
import Skill from '../Skill'
import icon from '../../media/user-img.svg'
import CompanyIcon from '../CompanyIcon'
import './JobPost.scss'

type JobPostProps = {
  title: string
  jobDescription: string
  seniority: string
  startingDate: string
  skills: any[]
}

const JobPost = ({
  title,
  jobDescription,
  seniority,
  startingDate,
  skills,
}: JobPostProps) => {
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
