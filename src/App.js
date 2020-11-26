import React from "react";
import Search from "./components/Search";
import Layout from "./components/Layout";
//import MyNavbar from './components/Navbar';
import MySlider from "./components/Slider";
//import MediaCard from './components/Card';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import './components/styles/Card.css'
//import dataD from "./data/item.json";
import axios from 'axios';
import FormLogin from './Pages/Login';
import "bootstrap/dist/css/bootstrap.min.css";

const api = axios.create({
  baseURL: `http://localhost:3001/gets`
});


class App extends React.Component {
  state = {
    loading: true,
    data: undefined,
  }
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true});
    try {
      await api.get('/').then(data => {
        this.setState({ loading: false, data: data.data });
      });
    } catch (error) {
      this.setState({ loading: false});
    }
  };
  render() {
    if(this.state.loading === true && !this.state.data){
      return <div/>;
    }
    const peticion = JSON.parse(localStorage.getItem("Compra"));

    if (!peticion) {
      localStorage.setItem("Compra", "[]");
    }
    const Addcarrito = (e) => {
      const elem = e.target.id;
      //console.log(data);
      let vector = JSON.parse(localStorage.getItem("Compra"));
      vector.push(this.state.data.find((element) => element.id === elem));
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
              component={() => <MySlider Add={Addcarrito} data={this.state.data} />}
            />
            <Route
              exact
              path="/Hogar"
              component={() => <Search Add={Addcarrito} data={this.state.data} />}
            />
            <Route
              exact
              path="/Tecnologia"
              component={() => <Search Add={Addcarrito} data={this.state.data} />}
            />
            <Route
              exact
              path="/Alimentos"
              component={() => <Search Add={Addcarrito} data={this.state.data} />}
            />
            <Route
              exact
              path="/Salud"
              component={() => <Search Add={Addcarrito} data={this.state.data} />}
            />
            <Route
              exact
              path="/otros"
              component={() => <Search Add={Addcarrito} data={this.state.data} />}
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
