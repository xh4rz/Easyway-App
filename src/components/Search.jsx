import React from "react";
//import Layout from "./Layout";
import MediaCard from "./Card";
// import './components/styles/Card.css'

import "bootstrap/dist/css/bootstrap.min.css";

function App({ Add, data }) {
  return (
    <div
      className="Container__Cards"
      style={{ textAlign: "center", margin: 100 }}
    >
      {data.length === 0
        ? ""
        : window.location.pathname === "/Hogar" ?
        data
            .slice(11, data.length)
            .map((info) => (
              <MediaCard
                key={info.id}
                ID={info.id}
                name={info.name}
                price={info.price}
                description={info.description}
                click={Add}
              />
            )) : ""}
    </div>
  );
}

export default App;
