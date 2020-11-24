import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./images/Logo.png";
import "./styles/Navbar.css";

function MyNavbar(props){
  
  const [Compra, setCompra] = useState([]);
  const peticion = JSON.parse(localStorage.getItem("Compra"));
  if((Compra.length === 0 && peticion.length!==0) || (Compra.length!==0 && peticion.length!==Compra.length)){
    setCompra(peticion);
  }
    
  
    return (
      <>
        {/* Navbar Principal */}
        <Navbar className="Navbar__primary" sticky="top">
          <Navbar.Brand href="#home">
            <img className="Logo" src={Logo} alt="mi navbar" />
          </Navbar.Brand>

          <InputGroup className="Input-search">
            <FormControl
              placeholder="¿Qué estás buscando?"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button className="Search" variant="dark">
                <i className="fas fa-search"></i>
              </Button>
            </InputGroup.Append>
          </InputGroup>

          <Nav className="Nav__primary d-flex justify-content-end">
            <Nav.Link href="#cuenta">
              <div className="d-flex justify-content-center">
                <i className="fas fa-user fa-2x mb-2"></i>
              </div>
              Mi Cuenta
            </Nav.Link>

            <Nav.Link href="#pedidos">
              <div className="d-flex justify-content-center">
                <i className="fas fa-clipboard-list fa-2x mb-2"></i>
              </div>
              Mis Pedidos
            </Nav.Link>
            <Nav.Link href="#carrito">
              {Compra.length === 0 ? "" : 
              <div className="notificacion">
                {Compra.length}
              </div>

              }
              <div className="d-flex justify-content-center">
                <i className="fas fa-shopping-cart fa-2x mb-2"></i>
              </div>
              Mi Carrito
            </Nav.Link>
          </Nav>
        </Navbar>

        {/* Navbar Secundario */}
        <Navbar collapseOnSelect expand="lg" className="Navbar__secondary">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="prueba">
              <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Hogar y Bienestar
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">
                  Tecnología
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">
                  Alimentos
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">Salud</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.5">otros</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#features">
                <i className="fas fa-home mr-2"></i>
                Inicio
              </Nav.Link>

              <Nav.Link href="#pricing">
                <i className="fas fa-tags mr-2"></i>
                Ofertas
              </Nav.Link>

              <Nav.Link href="#pricing">
                <i className="fas fa-map-marker-alt mr-2"></i>
                Tiendas
              </Nav.Link>

              <Nav.Link href="#pricing">
                <i className="fas fa-store mr-2"></i>
                Conócenos
              </Nav.Link>

              <Nav.Link href="#pricing">
                <i className="fas fa-handshake mr-2"></i>
                Servicios
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  
}

export default MyNavbar;
