import * as React from 'react'
import { Col, Row, Tab, Nav } from 'react-bootstrap'
import MatchCard from './MatchCard'
import JobPost from '../JobPost'
// import SearchBar from './SearchBar'

const Tabs = () => {
  return (
    <div className="Container ">
      {/* <SearchBar /> */}
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="side-nav-link">
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="side-tab">
                <Nav.Link className="navlink" eventKey="first">
                  Job Post
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="side-tab">
                <Nav.Link eventKey="second">Matches</Nav.Link>
              </Nav.Item>
              <Nav.Item className="side-tab">
                <Nav.Link eventKey="third">Chat</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <JobPost />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <MatchCard />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <h2>Chat</h2>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}
export default Tabs
