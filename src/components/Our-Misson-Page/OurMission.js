import React, { Component } from "react";

//Navbar component from Home Page
import Navbar from "../Home-Page/navbar";

//Components For Our Mission Page
import OurMissionBanner from "./OMBanner";
import ESSection from "./ESSection";
import OMSection from "./OMSection";
import OSSection from "./OSSection";
import TheTrust from "./OMTheTrust";
import OMParallax from "./OMParallax";

//Footer component from Home Page
import Footer from "../Home-Page/footer";

class OurMissionApp extends Component {
  state = {};
  render() {
    return (
      <div className="OurMissionApp">
        <Navbar />
        <OurMissionBanner />
        <ESSection />
        <OMSection />
        <TheTrust />
        <OSSection />
        <OMParallax />
        <Footer />
      </div>
    );
  }
}

export default OurMissionApp;
