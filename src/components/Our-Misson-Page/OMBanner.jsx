import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// importing bootstrap css
import "bootstrap/dist/css/bootstrap.css";

import "./OMBanner.css";

class OurMissionBanner extends Component {
  state = {};
  render() {
    return (
      <div className="OurMissionBanner">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h1>What We Do</h1>
            </div>
            <div className="col-sm-6">
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <span className="icon fa-fw fas fa-home me-4"></span>
                  <Link to="/">Home</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <span className="icon fas fa-fw fa-arrow-alt-circle-right me-4"></span>
                  Our - Mission
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurMissionBanner;
