import * as React from "react";
import { Tab, Row, Col, Nav,Form, InputGroup, FormControl, Button} from "react-bootstrap";
import './style.scss'
import MatchCard from './MatchCard'
import SearchBarCont from './SearchBarCont'
import JobPost from '../JobPost'
const CompanyMatchPage = () => {
  return (
  <>

  <div>
  <Tab.Container  defaultActiveKey="first">
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
            <JobPost />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <MatchCard />
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</div>
  </>
  );
};
export default CompanyMatchPage;