import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


//Home Page
import Navbar from "./components/Home-Page/navbar";
import Banner from "./components/Home-Page/banner";
import Welcome from "./components/Home-Page/welcome";
import FounderM from "./components/Home-Page/Founder-m";
import SocialUpdate from "./components/Home-Page/Social-Update";
import Vision from "./components/Home-Page/Vision-section";
import Footer from "./components/Home-Page/footer";
import Parallax from "./components/Home-Page/parallax";

import HistoryAPP from "./components/History-Page/HistoryApp";


function App() {
  return (
    <div className="App">
      <Router>
            <Switch>
              <Route exact path='/history' component={HistoryAPP}></Route>
            </Switch>
        
        <Navbar />
        <Banner />
        <Welcome />
        <Vision />
        <FounderM />
        <Parallax />
        {/* <SocialUpdate /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;