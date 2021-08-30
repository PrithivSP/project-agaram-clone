import React, { Component } from "react";
import "./OMParallax.css";
// importing bootstrap css
import "bootstrap/dist/css/bootstrap.css";

class OMParallax extends Component {
  state = {};
  render() {
    return (
      <div class="OMParallax">
        <h1>
          Help educate a child to <span className="OMParallax-help">help</span>{" "}
          a family
          <span>#change</span>
          <span id="span-a">a</span>
          <span>life</span>
        </h1>
      </div>
    );
  }
}

export default OMParallax;
