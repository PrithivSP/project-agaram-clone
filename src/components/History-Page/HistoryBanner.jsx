import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// importing bootstrap css
import "bootstrap/dist/css/bootstrap.css";

import "./HistoryBanner.css";

class HistoryBanner extends Component {
  state = {};
  render() {
    return (
      <div className="HistoryBanner">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h1>History</h1>
            </div>
            <div className="col-sm-6">
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <span className="icon fa-fw fas fa-home me-4"></span>
                  <Link to="/">Home</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <span className="icon fas fa-fw fa-arrow-alt-circle-right me-4"></span>
                  Our Story
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HistoryBanner;
