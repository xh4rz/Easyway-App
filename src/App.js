import React from 'react';
import MyNavbar from './components/Navbar';
import MySlider from './components/Slider';
import MyFooter from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <MySlider/>
      <MyFooter/>
    </div>
  );
}

export default App;