import React from 'react'
import { Button, Image, Badge } from 'react-bootstrap'
import male from '../../media/male.png'
import SearchBar from './SearchBar'
const MatchCard = () => {
  return (
    <>
      <SearchBar />
      <div className="Row mb-2">
        <div className="Col-md-12">
          <a href="www.google.com" className="text-dark">
            <div className="card match-card">
              <div className="card-body">
                <div className="row">
                  <div className="col-xs-1 col-sm-2 col-md-1 mr-3">
                    <Image src={male} />
                    <br></br>
                  </div>
                  <div className="col-xs-8 col-sm-7 col-md-8">
                    <h5>Car System Alerts</h5>
                    <p>Check the battery and alternator conditions</p>
                    <Badge className="btn nav-pill nav-link btn-outline-primary ">
                      JavaScript
                    </Badge>
                    <Badge
                      pill
                      className="btn nav-pill nav-link btn-outline-primary ml-2  "
                    >
                      ReactJs
                    </Badge>
                  </div>
                  <div className="d-flex align-items-center">
                    <Button className="card-button">View</Button>
                    <Button className="card-button">Chat</Button>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
export default MatchCard
