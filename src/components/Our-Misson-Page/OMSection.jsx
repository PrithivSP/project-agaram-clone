import React, { Component } from "react";

// importing css
import "./OMSection.css";

class OMSection extends Component {
  state = {};
  render() {
    return (
      <div className="OMSection">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <h1>
                Our <span>Mission</span>
              </h1>
              <p>
                In our endeavour to offer quality education to the deprived, our
                objectives are as follows:
              </p>

              <ul>
                <li>
                  <p>
                    {" "}
                    <i className="fab fa-envira"></i>
                    Strive to bridge the gap between deserving candidates and
                    quality education
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fab fa-envira"></i>
                    Build a new generation of responsible youth with education,
                    values,commitment and dedication to society.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-sm-5">
              <img
                className="img-fluid ps-4"
                src={"https://agaram.in/img/causes-3.jpg"}
                alt="Children in classroom"
              />
              <h3>
                " Arise..! Awake..! and stop not until the goal is reached "
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OMSection;
