import React, { Component } from "react";
import "./footer.css";
import {FaFacebookF} from "react-icons/fa";
import {MdLocationOn} from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa";
import {HiMailOpen} from "react-icons/hi"

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="content">
        <div className="row contentBox">
          <div className="col-sm-3">
            <img src={"https://s1.agaram.in/img/webp-img/agaram_logo.webp"} alt="Logo" />
            <br />
            <span className="span-ht">#change</span>
            <span className="span-a">a</span>
            <span className="span-ht">life</span>
            <br />
            <FaFacebookF />


          </div>
          <div className="col-sm-3 contentBox-right">
            <h2>Contact Us</h2>
            <hr />
            <ul>
              <li><a><MdLocationOn color="#FF612F" /> </a>
              15, Krishna street, T.Nagar, Chennai - 600 017</li>
              <li><a><FaPhoneAlt color="#FF612F" /> </a>
                Support: <a href={"tel:+91 98418 91000"}> +91 98418 91000 </a>
              </li>
              <li><a><HiMailOpen color="#FF612F" /> </a>
                Email: <a href={"mailto:info@agaram.in"}>info@agaram.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container footer-info">
          <p>
            &copy; 2021 <a href={"#"}>Agaram </a>. All rights reserved. Powered By{" "}
            <a href={"https://www.instagram.com/stick_official2020/"}>Team Stick </a>.
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
