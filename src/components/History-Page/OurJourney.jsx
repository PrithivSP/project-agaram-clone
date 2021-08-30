import React, { Component } from "react";

//importing css
import "./OurJourney.css";

import "bootstrap/dist/css/bootstrap.css";

class OurJourney extends Component {
  state = {};
  render() {
    return (
      <div className="container OJ-content">
        <h1>
          Our <span>Journey</span>
        </h1>
        <div className="timeline">
          <ul>
            <li>
              <div className="timeline-content">
                <p>
                  Agaram foundation was started by well-known film actor R.S
                  Suriya.
                </p>
              </div>
              <div className="time">
                {" "}
                <h5>September 2006</h5>
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <p>
                  Adoption of The Government Adidravida Welfare School in Palur,
                  Chengalpattu district Set-up a library in the school and
                  worked towards quality of education for the children of the
                  school.
                </p>
              </div>
              <div className="time">
                {" "}
                <h5>June 2007</h5>
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <p>
                  Produced and released "Herova... Zerova", a short film
                  emphasising the need for education.
                </p>
              </div>
              <div className="time">
                {" "}
                <h5>May 2008</h5>
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <p>
                  Launch of "AgaramKatralMaiyam", the learning centres to
                  provide basic coaching and special skills programs for
                  children in rural parts of Tamilnadu.
                </p>
              </div>
              <div className="time">
                {" "}
                <h5>August 2008</h5>
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <p>
                  Launch of "Vazhikatigal", the mentorship program focussed on
                  nurturing school children from remote parts of Tamilnadu.
                </p>
              </div>
              <div className="time">
                {" "}
                <h5>April 2009</h5>
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <p>
                  "Vidhai" (Tamil word that meaning "Seed"), an initiative with
                  the goal to create awareness for Agaram's initiatives and
                  increase participation Scouting for deserving students to help
                  them with college education under "Vidhai" banner.
                </p>
              </div>
              <div className="time">
                {" "}
                <h5>January 2010</h5>
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <p>
                  First batch of 160 students from 32 districts of Tamilnadu
                  benefitting from "Vidhai".
                </p>
              </div>
              <div className="time">
                {" "}
                <h5>June 2010</h5>
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <p>VIDHAI - 217 students supported for college education</p>
              </div>
              <div className="time">
                {" "}
                <h5>June 2011</h5>
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <p>VIDHAI - 128 students supported for college education</p>
              </div>
              <div className="time">
                {" "}
                <h5>June 2012</h5>
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <p>
                  VIDHAI - 194 students support for college education 16
                  students support by vidhai graduated from college
                </p>
              </div>
              <div className="time">
                {" "}
                <h5>June 2013</h5>
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <p>
                  VIDHAI - 225 students support for college education 214
                  students support by vidhai graduated from college
                </p>
              </div>
              <div className="time">
                {" "}
                <h5>June 2014</h5>
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <p>
                  Thai - Identify deserving rural youth,who dropped out of
                  education and train them in industry skills, mentor and groom
                  them to beresponsible citizens. 36 Vayadhinile - Women
                  empowerment & Entrepreneurship initiative. VIDHAI - 267
                  Students supported for college education. 171 students support
                  by vidhai graduated from college
                </p>
              </div>
              <div className="time">
                {" "}
                <h5>June 2015</h5>
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <p>
                  Namathu Giramam - rehabilitation of irula hamlets of rural
                  villages. OPEN DEFECATION FREEVILLAGE - with support from
                  corporate “ford” built toilets and enabled a open defecation
                  free village. VIDHAI - 301 Students supported for college
                  education. 181 students support by vidhai graduated from
                  college
                </p>
              </div>
              <div className="time">
                {" "}
                <h5>June 2016</h5>
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <p>
                  Namathupalli - Restoring a Govt. School to enable healthy
                  learning atmosphere. VIDHAI - 469 Students supported for
                  college education. 193 students support by vidhai graduated
                  from college
                </p>
              </div>
              <div className="time">
                {" "}
                <h5>June 2017</h5>
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <p>
                  Namathupalli - adopted one more govt school under
                  nammathupali. Namathu Giramam - infrastructure in the villages
                  and helped the community to obtain community certificates.
                  VIDHAI - 493 Students supported for college education. 255
                  students support by vidhai graduated from college
                </p>
              </div>
              <div className="time">
                {" "}
                <h5>June 2018</h5>
              </div>
            </li>

            <li>
              <div className="timeline-content">
                <p>
                  Namathupalli - adopted 3 govt. schools. VIDHAI – 502 Students
                  supported for college education.
                </p>
              </div>
              <div className="time">
                {" "}
                <h5>June 2019</h5>
              </div>
            </li>

            <div className="timeline-clear"></div>
          </ul>
        </div>
      </div>
    );
  }
}

export default OurJourney;
