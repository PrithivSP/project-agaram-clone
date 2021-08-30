import React, { Component } from "react";
import './OSSection.css'

class OSSection extends Component {
  state = {};
  render() {
    return (
      <div className="Strategy-content container">
        <h1 className="startegy-h1">Our strategic <span>planning advisory</span> body</h1>
        <p className="startegy-p">This is the strategic planning committee of the foundation. They are the members who strategize the operations and plan for the various programs that benefit the students of
        Agaram. Regular meetings help to evaluate the progress and effectiveness of the programs and provide direction as to what can be accomplished in the future.</p>
        
        <div className="row first">
          <div className="col-sm-3 strategy">
            <h5>Mr. Prabhakalvimani</h5>
            <p>Correspondent for Thai Thamizh Thodakkappalli,
              Tindivanam.Co-ordinator for Palangudilrular
              PadhukappuSangam, Human Rights Activist and
              Educationalist.</p>
          </div>
          <div className="col-sm-3 strategy">
            <h5>Dr.V.Vasanthi Devi</h5>
            <p>She is a former Vice-Chancellor, Manonmaniam
            University & Chairperson, Tamil Nadu State, Women's
            Commission, Chennai Chairperson of the Institute of
            Human Rights Education and former Chairperson of the 
            State Commission for Women.</p>
          </div>
          <div className="col-sm-3 strategy">
            <h5>Mrs.Brinda Jayaraman</h5>
            <p>Psychological consultant Founder of Anchor Self Help
            Access (ASHA).She serves as Consultant to many
            schools and conducts workshops on Parenting Skills,
            Counseling skills, Interpersonal Skills and Study Skills
            among other areas. She is also a prolific writer and
            well-known TV commentator.
            </p>
          </div>
        </div>

        <div className="row second">
          <div className="col-sm-6 strategy1">
            <h5>Retd.Justice K.Chandru</h5>
            <p>Retired High Court Judge, renowned for settling 96000
            cases over a period of 6 years.
            </p>
          </div>
          <div className="col-sm-6 strategy1">
            <h5>Mr. Thomas Kandhasami:</h5>
            <p>One of the leading Auditors in Chennai who specializes in
            Financial Management consultancy for Non-profit
            organizations.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default OSSection;
