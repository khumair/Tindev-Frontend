import * as React from "react";
import { Tab, Row, Col, Nav, InputGroup, Button, FormControl} from "react-bootstrap";
import './style.scss'
import MatchCard from './MatchCard'
import SearchBarCont from './SearchBarCont'
const CompanyMatchPage = () => {
  return (
  <>
  
  <div className='Row'> 
   <InputGroup className="search-bar">
        <FormControl
          placeholder="Seach"
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
  </div>
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
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
            
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