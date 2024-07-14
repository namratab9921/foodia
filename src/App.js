import logo from './logo.svg';
import './App.css';
import './Assets/CSS/style.css'
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Categories from './Components/Categories';
import BestSelling from './Components/BestSelling';
import Offers from './Components/Offers';
import Popular from './Components/Popular';
import Advertise from './Components/Advertise';
import GetStarted from './Components/GetStarted';
import MoreInfo from './Components/MoreInfo';
import FooterBar from './Components/FooterBar';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Navbar />
      <Banner />
      <Categories />
      <BestSelling />
      <Offers />
      <Popular />
      <Advertise />
      <GetStarted />
      <MoreInfo />
      <FooterBar />


    </div>
  );
}

export default App;
