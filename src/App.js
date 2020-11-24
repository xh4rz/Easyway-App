import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MySlider from './components/Slider';
import MediaCard from './components/Card';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <Layout>
        <Switch>
        <Route exact path = "/" component={MySlider}/>

        <div className="Container__Cards" style={{textAlign: "center", margin: 100}}>
        <Route exact patch = "/Hogar" component={MediaCard} />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        </div>

        </Switch>
    </Layout>
    </BrowserRouter>
  );
}

export default App;