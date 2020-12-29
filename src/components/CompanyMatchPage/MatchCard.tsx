import React from 'react'
import { Image, Badge, Button} from "react-bootstrap";
import male from "../../assets/images/male.png";

const MatchCard = () => {
    return(
        <div className="Container">
        <div className="Row mb-2">
          {/* <div className="Col-md-2"></div> */}
          <div className="Col-md-12">
            <a href="#" className="text-dark">
              <div className="card shadow">
                <div className="card-body">
                  <div className="row">
                    <div className="col-xs-1 col-sm-2 col-md-1 mr-3">
                      <Image src={male} />
                      <br></br>
                    </div>
                    <div className="col-xs-8 col-sm-7 col-md-8">
                      <h5>Car System Alerts</h5>
                      <p>Check the battery and alternator conditions</p>
                      <Badge
                        pill
                        className="tag-btn btn btn-pill btn-outline-primary ml-2"
                      >
                        JavaScript
                      </Badge>
                      <Badge
                        pill
                        className="tag-btn btn btn-pill btn-outline-primary ml-2"
                      >
                        ReactJs
                      </Badge>
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
export default MatchCard;