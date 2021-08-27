import React, { Component } from "react";
import "./play-btn.css";
import "./welcome.css";

class Welcome extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h2 className="wel-heading">
              Welcome To <span> Agaram </span>Foundation
            </h2>
            <hr className="welcome-hr" />
            <p className="wel-para">
              India is on the cusp of change. The country is marching into the
              21st century, rightly proud of all its advancements in science and
              technology, its spectacular improvements in infrastructure and IT.
              And yet, we're weighed down by devastating inequalities, by a huge
              population that remains untouched by well- meaning acts like the
              Right to Education, and a large gender inequality. At Agaram, we
              want to make a difference in the lives of the millions who are not
              yet touched by education.
            </p>
          </div>
          <div className="col-sm-6">
          <a href="javascript:void();"></a>
            <img className="img-responsive img-fluid video-img" src={ "https://s1.agaram.in/img/webp-img/video-img.webp" } width="90%" />
            <div className="video-thumbnail">
              <div className="play-btn">
                <a href={"#videostory"} className="button more" id="videolink">
                  <i class="fas fa-play-circle"></i>
                </a>
                <div id="videostory" className="mfp-hide">
                  <iframe
                    width="853"
                    height="480"
                    src={"https://www.agaram.in/video/Agaram%20Foundation%20--%20Maadham%20300%20--%20Suriya.mp4"}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
