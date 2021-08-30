import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


//Home Page
// import Navbar from "./components/Home-Page/navbar";
// import Banner from "./components/Home-Page/banner";
// import Welcome from "./components/Home-Page/welcome";
// import FounderM from "./components/Home-Page/Founder-m";
// import Parallax from "./components/Home-Page/parallax";
// import SocialUpdate from "./components/Home-Page/Social-Update";
// import Vision from "./components/Home-Page/Vision-section";
// import Footer from "./components/Home-Page/footer";

//importing HomePage Components
import HomeApp from "./components/Home-Page/HomeApp";

//importing History Components
import HistoryApp from "./components/History-Page/HistoryApp";

//importing Our Mission Components
import OurMissionApp from "./components/Our-Misson-Page/OurMission";


function App() {
  return (
    <div className="App">
      <Router>
            <Switch>
              <Route exact path='/' component={HomeApp}></Route>
              <Route exact path='/history' component={HistoryApp}></Route>
              <Route exact path='/OurMission' component={OurMissionApp}></Route>
            </Switch>
        {/* <Banner />
        <Welcome />
        <Vision />
        <FounderM />
        <Parallax /> */}
        {/* <SocialUpdate /> */}
      </Router>
    </div>
  );
}

export default App;