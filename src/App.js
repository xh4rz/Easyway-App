import React from 'react';
import MyNavbar from './components/Navbar';
import MySlider from './components/Slider';
import ImgMediaCard from './components/Card';
import MyFooter from './components/Footer';

// import './components/styles/Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MySlider />
      <div className="Container__Cards" style={{textAlign: "center", margin: 100}}>
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard /> <br/>
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard /> <br/>
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
      </div>


      <MyFooter />

    </div>
  );
}

export default App;