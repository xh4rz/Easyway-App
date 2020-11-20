import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "./images/navidad.webp";
import Slide2 from "./images/celulares.webp";
import Slide3 from "./images/maizena.webp";

import './styles/Slider.css'

const MySlider = () => {
    return (
        <div className="Slider d-flex justify-content-center" >
        <Carousel className="Carousel w-100">
            <Carousel.Item interval={3000}>
                <img
                    className="w-100"
                    src={Slide1}
                    alt="Primer Slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={Slide2}
                    alt="Segundo Slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={Slide3}
                    alt="Tercer Slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default MySlider;