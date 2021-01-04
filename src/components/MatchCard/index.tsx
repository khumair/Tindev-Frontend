import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'

import Candidate from '../Candidate'
//import male from '../../media/male.png'

type MatchCardProps = {
  firstName: string
  lastName: string
  skills: any[]
}

const MatchCard = ({ firstName, lastName, skills }: MatchCardProps) => {
  return (
    <div className="Container">
      <div className="d-flex flex-row-reverse"></div>
      <div className="Row mb-2">
        <div className="Col-md-12">
          {/* <a href="#" className="text-dark"> */}
          <div className="card border border-dark mt-2">
            <div className="card-body">
              <div className="row align-items-center">
                {/* <div className="col-xs-1 col-sm-2 col-md-1 mr-3">
                    <Image src={male} />
                    <br></br>
                  </div> */}
                <div className="col-xs-8 col-sm-7 col-md-8">
                  <Candidate
                    key={lastName}
                    firstName={firstName}
                    lastName={lastName}
                    skills={skills}
                  />

                  {/* <Button  className="float-right" variant="primary" >Primary</Button>
                    <Button variant="primary">Primary</Button> */}
                </div>
                <Col>
                  <Link className="float-right" to="/jobseeker/profile">
                    View Profile
                  </Link>
                </Col>
                <Col>
                  <Link to="/chat">Chat</Link>
                </Col>

                {/* <Button className="card-button">View Profile</Button>
                <Button className="card-button">Chat</Button> */}
              </div>
            </div>
          </div>
          {/* </a> */}
        </div>
      </div>
    </div>
  )
}
export default MatchCard
