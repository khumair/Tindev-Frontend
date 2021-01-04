import React from 'react'
import { Image, Button, Form, FormControl } from 'react-bootstrap'
import TagBadges from '../TagBadges'
import male from '../../media/male.png'

const MatchCard = () => {
  return (
    <div className="Container">
      <div className="d-flex flex-row-reverse">
        <Form inline className="search-form">
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
        </Form>
      </div>
      <div className="Row mb-2">
        <div className="Col-md-12">
          <a href="www.google.com" className="text-dark">
            <div className="card border border-dark mt-2">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-xs-1 col-sm-2 col-md-1 mr-3">
                    <Image src={male} />
                    <br></br>
                  </div>
                  <div className="col-xs-8 col-sm-7 col-md-8">
                    <h5>Car System Alerts</h5>
                    <p>Check the battery and alternator conditions</p>

                    <TagBadges />
                    {/* <Button  className="float-right" variant="primary" >Primary</Button>
                    <Button variant="primary">Primary</Button> */}
                  </div>

                  <Button className="card-button">View</Button>
                  <Button className="card-button">Chat</Button>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
export default MatchCard
