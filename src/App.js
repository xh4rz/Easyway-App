import React from 'react';
import MyNavbar from './components/Navbar';
import MySlider from './components/Slider'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <MySlider/>
    </div>
  );
}

export default App;