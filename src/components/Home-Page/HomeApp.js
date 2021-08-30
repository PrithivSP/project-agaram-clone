import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


//Home Page
import Navbar from "./navbar";
import Banner from "./banner";
import Welcome from "./welcome";
import FounderM from "./Founder-m";
import SocialUpdate from "./Social-Update";
import Vision from "./Vision-section";
import Footer from "./footer";
import Parallax from "./parallax";


class HomeApp extends Component {
  render (){
      return(
        <div>
        <Navbar />
          <Banner />
          <Welcome />
          <Vision />
          <FounderM />
          <Parallax />
          {/* <SocialUpdate /> */}
          <Footer />
      </div>
      );
  }
}

export default HomeApp;