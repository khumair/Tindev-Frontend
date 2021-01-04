import React /*, { useState } */ from 'react'
//import { useDispatch, useSelector } from 'react-redux'
import { Tab, Row, Col, Nav } from 'react-bootstrap'
import MatchCard from '../../components/MatchCard'
import CompanyProfileForm from '../../components/CompanyProfileForm'

const CompanyMatchPage = () => {
  const jobseekerMatches = [
    {
      firstName: 'Dilip',
      lastName: 'Poudel',
      skills: ['javascript', 'react'],
    },
    {
      firstName: 'Duy',
      lastName: 'Nguyen',
      skills: ['javascript', 'react'],
    },
  ]

  return (
    <>
      <div className="py-3">
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav className="flex-column nav-bar">
                <Nav.Item>
                  <Nav.Link eventKey="first">Post</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Match</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Chat</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9} className="tab-content">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <CompanyProfileForm />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {jobseekerMatches.map(jobseeker => {
                    return (
                      <MatchCard
                        key={jobseeker.lastName}
                        firstName={jobseeker.firstName}
                        lastName={jobseeker.lastName}
                        skills={jobseeker.skills}
                      />
                    )
                  })}
                </Tab.Pane>
                <Tab.Pane eventKey="third"></Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  )
}
export default CompanyMatchPage
