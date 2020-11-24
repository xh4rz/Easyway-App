import React from "react";
//import Layout from "./Layout";
import MediaCard from "./Card";
// import './components/styles/Card.css'

import "bootstrap/dist/css/bootstrap.min.css";

function App({ Add, data }) {
  const path = window.location.pathname;
  const datastart = () =>(
    path === "/Hogar" ? 12 : 
    path === "/Tecnologia" ? 4 : 
    path === "/Alimentos" ? 0 : 
    path === "/Salud" ? 8 : 0
  )
    console.log(`${path}`);
    return (
    <div
      className="Container__Cards"
      style={{ textAlign: "center", margin: 100 }}
    >
      {}
      {   data
            .slice(datastart(), path === "/otros" ? data.length : datastart() +4 )
            .map((info) => (
              <MediaCard
                key={info.id}
                ID={info.id}
                name={info.name}
                price={info.price}
                description={info.description}
                click={Add}
              />
            ))}
    </div>
  );
}

export default App;
