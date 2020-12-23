import React from "react";
import { Col, Row, Container, Button, Image, Badge } from "react-bootstrap";

import male from "../../assets/images/male.png";
const MatchCard = () => {
  return (
    <div className="Row mb-2">
      <div className="Col-md-12">
        <a href="#" className="text-dark">
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
                  <Badge className="tag-btn btn btn-pill btn-outline-primary ml-2">
                    JavaScript
                  </Badge>
                  <Badge
                    pill
                    className="tag-btn btn btn-pill btn-outline-primary ml-2"
                  >
                    ReactJs
                  </Badge>
                </div>
                <div className="d-flex align-items-center">
                  <Button className="view-btn " size="sm">
                    View
                  </Button>

                  <Button className="view-btn" size="sm">
                    Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
export default MatchCard;
