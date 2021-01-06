import React /*, { useState } */ from 'react'
//import { useDispatch, useSelector } from 'react-redux'

import Tabs from '../../components/Tabs'
import MatchCardCompany from '../../components/MatchCardCompany'
import CompanyProfileForm from '../../components/CompanyProfileForm'

const CompanyProfile = () => {
  const match = {
    firstName: 'Dilip',
    lastName: 'Poudel',
    skills: ['javascript', 'react'],
  }

  return (
    <>
      <Tabs
        formComponent={<CompanyProfileForm />}
        matchComponent={<MatchCardCompany match={match} />}
      />
      {/* <div className="py-3">
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
                      <MatchCardCompany
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
      </div> */}
    </>
  )
}
export default CompanyProfile
