import React, { Component } from "react";
import "./Founder-m.css";
// importing bootstrap
import "bootstrap/dist/css/bootstrap.css";

class FounderM extends Component {
  state = {
    founderImg: ``,
    founderM_title: "",
    founderM_name: "R.S. Suriya, Founder, Agaram Foundation.",
    founderMessage1: `"I strongly believe that we can eliminate social evils and uplift the society only through education. Through Agaram, we reach out to deserving students from most backward parts of the country and provide them with opportunities to not only complete their education, but also transform into confident, competent and socially responsible individuals`,
    founderMessage2: `"Education has got the power to make a human civilized and face the challenges of life. Education is an answer to the economic imbalance of an individual, religion and caste divide that prevails in the society and could be an important factor that blocks the above being transferred to the next generation."`,
    founderMessage3: `"I am confident that the beneficiaries of Agaram, whom we nurture today, will soon become the much needed catalysts to bring about the positive transformation in their families, communities and society at large."`,
  };
  render() {
    return (
      <div className="container-fluid row">
        <div className="col-sm-6">
          <img
            src={"https://s1.agaram.in/img/webp-img/founder_surya.webp"}
            className="img-fluid"
            alt="Founder"
          />
        </div>
        <div className="col-sm-6">
          <h3 className="FounderTitle">{this.state.founderM_title}</h3>
          <hr className="hr-Aft-Ft" />
          <h5 className="f-M-Name py-4">{this.state.founderM_name}</h5>
          <p className="f-M">{this.state.founderMessage2}</p>
          <p className="f-M">{this.state.founderMessage3}</p>
          <p className="f-M">{this.state.founderMessage1}</p>
        </div>
      </div>
    );
  }
}

export default FounderM;
