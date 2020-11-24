import React, {useState} from 'react';
import MyNavbar from './components/Navbar';
import MySlider from './components/Slider';
import ImgMediaCard from './components/Card';
import MyFooter from './components/Footer';
import { nanoid } from 'nanoid'

// import './components/styles/Card.css'
import data from './data/item.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const peticion = JSON.parse(localStorage.getItem("Compra"));
  console.log(data);
    if (!peticion) {
      localStorage.setItem("Compra", "[]");
    }
  const [update, setupdate] = useState(false);
  
  const Addcarrito = (e) => {
    let vector = JSON.parse(localStorage.getItem('Compra'));
    vector.push({id: nanoid(), des: "Lorem ipsum"});
    localStorage.setItem('Compra', JSON.stringify(vector));
    setupdate(!update);
  };
  return (
    <div className="App">
      <MyNavbar />
      <MySlider />
      <div className="Container__Cards" style={{textAlign: "center", margin: 100}}>
        <ImgMediaCard click={Addcarrito}/>
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