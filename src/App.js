import React, {useState} from 'react';
import Search from './components/Search';
import Layout from './components/Layout';
//import MyNavbar from './components/Navbar';
import MySlider from './components/Slider';
//import MediaCard from './components/Card';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import './components/styles/Card.css'
import data from './data/item.json'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const peticion = JSON.parse(localStorage.getItem("Compra"));
  
    if (!peticion) {
      localStorage.setItem("Compra", "[]");
    }
  const [update, setupdate] = useState(false);
  
  const Addcarrito = (e) => {
    const elem = e.target.id;
    //console.log(elem);
    let vector = JSON.parse(localStorage.getItem('Compra'));
    vector.push(data.find(element => element.id === elem));
    localStorage.setItem('Compra', JSON.stringify(vector));
    setupdate(!update);
  };
  return (
    <BrowserRouter>
      <Layout>
        <Switch>

          <Route exact path="/" component={() => <MySlider Add={Addcarrito} data={data} />} />
          <Route exact path="/Hogar" component={() => <Search Add={Addcarrito} data={data} />} />


        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;