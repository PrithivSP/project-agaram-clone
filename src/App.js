import './App.css';
import Navbar from './components/navbar.jsx';
import Banner from './components/banner.jsx';
import Welcome from './components/welcome.jsx';
import FounderM from './components/Founder-m';
import SocialUpdate from './components/Social-Update';
import Vision from './components/Vision-section';
import Footer from './components/footer';
import Parallax from './components/parallax.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Welcome />
      <Vision />
      <FounderM />
      <Parallax />
      <SocialUpdate />
      <Footer />
    </div>
  );
}

export default App;