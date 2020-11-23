import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './styles/Footer.css';
import Facebook from './images/icons/facebook.svg'
import Instagram from './images/icons/instagram.svg'
import Twitter from './images/icons/twitter.svg'
import Whatsapp from './images/icons/whatsapp.svg'
import Youtube from './images/icons/youtube.svg'

class MyFooter extends React.Component {
    render() {
        return (
            <div className="footer">
                <Container fluid className="Footer__primary">
                    <Row>
                        <Col>
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Nuestra Compañia</h5>
                            <ul className="list-unstyled">
                                <li className="Links__footer">
                                    <a href="1">Valores</a> <br />
                                    <a href="2">Visión</a> <br />
                                    <a href="3">Misión</a> <br />
                                    <a href="4">Politicas de calidad</a> <br />
                                </li>
                            </ul>
                        </Col>

                        <Col>
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Servicios</h5>
                            <ul className="list-unstyled">
                                <li className="Links__footer">
                                    <a href="hhh">Domicilios</a> <br />
                                    <a href="hhh">Envíos</a> <br />
                                    <a href="hhh">Recoge en Tienda</a> <br />
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Categorías</h5>
                            <ul className="list-unstyled">
                                <li className="Links__footer">
                                    <a href="hhh">Hogar y Bienestar</a> <br />
                                    <a href="hhh">Tecnología</a> <br />
                                    <a href="hhh">Alimentos</a> <br />
                                    <a href="hhh">Salud</a> <br />
                                    <a href="hhh">Otros</a> <br />
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Siguenos</h5>
                            <ul className="list-unstyled">
                                <li className="Links__footer">
                                    <a href="https://www.facebook.com"><img className="Facebook" src={Facebook} alt="mi Facebook" /></a>
                                    <a href="https://www.instagram.com"><img className="Instagram" src={Instagram} alt="mi Instagram" /></a>
                                    <a href="https://www.twitter.com"><img className="Twitter" src={Twitter} alt="mi Twitter" /></a>
                                    <a href="https://web.whatsapp.com/"><img className="Whatsapp" src={Whatsapp} alt="mi Whatsapp" /></a>
                                    <a href="https://youtube.com/"><img className="Youtube" src={Youtube} alt="mi Youtube" /></a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Container fluid className="Links__footer d-flex justify-content-end">
                        <a href="hhh">© 2020 easyway | Todos los derechos reservados</a>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default MyFooter;