import React, { Component } from "react";

//Navbar component from Home Page
import Navbar from "../Home-Page/navbar";

//Components For History Page
import HistoryBanner from "./HistoryBanner";
import AfSection from "./AfSection";
import OurJourney from "./OurJourney";

//Footer component from Home Page
import Footer from "../Home-Page/footer";

class HistoryApp extends Component {
  render() {
    return (
      <div className="HistoryApp">
        <Navbar />
        <HistoryBanner />
        <AfSection />
        <OurJourney />
        <Footer />
      </div>
    );
  }
}

export default HistoryApp;
