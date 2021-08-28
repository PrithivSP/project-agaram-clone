import React, { Component } from "react";
import "./navbar.css";
import "./play-btn.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top">
            <div class="container">
              <a class="navbar-brand" href="#">
                <img
                  src={"https://s1.agaram.in/img/webp-img/agaram_logo.webp"}
                  alt="Logo"
                  className="img-responsive img-fluid"
                />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li className="nav-items active">
                    <a href="#" className="nav-link" aria-current="page">
                      Home
                    </a>
                  </li>
                  <li className="nav-items">
                    <li>
                      <Link to="/history">About Us</Link>
                    </li>
                  </li>
                  <li className="nav-items">
                    <a href="#" className="nav-link">
                      What we do
                    </a>
                  </li>
                  <li className="nav-items">
                    <a href="#" className="nav-link">
                      Be a part with us
                    </a>
                  </li>
                  <li className="nav-items">
                    <a href="#" className="nav-link">
                      Magazine
                    </a>
                  </li>
                  <li className="nav-items">
                    <a href="#" className="nav-link">
                      Gallery
                    </a>
                  </li>
                  <li className="nav-items">
                    <a href="#" className="nav-link">
                      Agaram TV
                    </a>
                  </li>
                  <li className="nav-items">
                    <a href="#" className="nav-link">
                      FAQ
                    </a>
                  </li>
                  <li className="nav-items">
                    <a href="#" className="nav-link">
                      Contact
                    </a>
                  </li>
                  <button className="btn btn-sm" id="donate">
                    Donate
                  </button>
                </ul>
              </div>
            </div>
          </nav>

          <div class="container-fluid">
            {/* Share btn  */}
            <div class="social_box">
              <a class="share_icon">
                <i class="fas fa-share-alt"></i>
              </a>
              <ul class="social_links">
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div class="msg-btn">
              <i class="fas fa-comment-alt"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
