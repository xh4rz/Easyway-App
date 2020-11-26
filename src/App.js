import React from "react";
import Search from "./components/Search";
import Layout from "./components/Layout";
import MySlider from "./components/Slider";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import data from "./data/item.json";

import FormLogin from './Pages/Login'


import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  render() {
    const peticion = JSON.parse(localStorage.getItem("Compra"));

    if (!peticion) {
      localStorage.setItem("Compra", "[]");
    }
    const Addcarrito = (e) => {
      const elem = e.target.id;
      //console.log(data);
      let vector = JSON.parse(localStorage.getItem("Compra"));
      vector.push(data.find((element) => element.id === elem));
      localStorage.setItem("Compra", JSON.stringify(vector));
      this.child.current.UpDate();
    };
    return (
      <BrowserRouter>
        <Layout ref={this.child}>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <MySlider Add={Addcarrito} data={data} />}
            />
            <Route
              exact
              path="/Hogar"
              component={() => <Search Add={Addcarrito} data={data} />}
            />
            <Route
              exact
              path="/Tecnologia"
              component={() => <Search Add={Addcarrito} data={data} />}
            />
            <Route
              exact
              path="/Alimentos"
              component={() => <Search Add={Addcarrito} data={data} />}
            />
            <Route
              exact
              path="/Salud"
              component={() => <Search Add={Addcarrito} data={data} />}
            />
            <Route
              exact
              path="/otros"
              component={() => <Search Add={Addcarrito} data={data} />}
            />
            <Route
              exact
              path="/Login"
              component={FormLogin} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
