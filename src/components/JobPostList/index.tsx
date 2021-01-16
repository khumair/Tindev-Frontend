import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, /*Image,*/ ListGroup } from 'react-bootstrap'

import Skill from '../Skill'
import icon from '../../media/user-img.svg'
import CompanyIcon from '../../components/CompanyIcon'
import { AppState } from '../../redux/types'

const JobPostList = () => {
  const jobPosts = useSelector((state: AppState) => state.employer.jobPosts)

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
              {jobPosts.map(jp => {
                return (
                  <ListGroup.Item className="">
                    <Link to="/company/jobpost/:id">Title{jp.title}</Link>
                  </ListGroup.Item>
                )
              })}
            </ListGroup>
          </Row>
          <Row>
            <ListGroup variant="flush">
              {jobPosts.map(jp => {
                return (
                  <ListGroup.Item>
                    Description{jp.jobDescription}
                  </ListGroup.Item>
                )
              })}
            </ListGroup>
          </Row>
          <Row>
            <ListGroup variant="flush">
              {jobPosts.map(jp => {
                return <Skill skills={jp.skills} />
              })}
            </ListGroup>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default JobPostList
