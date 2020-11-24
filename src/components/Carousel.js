import React from 'react';
import ElasticCarousel from 'react-elastic-carousel';
import Item from './Item';
import MediaCard from './Card';

import './styles/Carousel.css';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];


class CarouselSecondary extends React.Component {
    render() {
        return (
            <div>
                <h3>RECOMENDAMOS PARA TI</h3>
                <ElasticCarousel breakPoints={breakPoints}>
                    <Item><MediaCard/></Item>
                    <Item><MediaCard/></Item>
                    <Item><MediaCard/></Item>
                    <Item><MediaCard/></Item>
                    <Item><MediaCard/></Item>
                    <Item><MediaCard/></Item>
                    <Item><MediaCard/></Item>
                    <Item><MediaCard/></Item>
                </ElasticCarousel>
            </div>
        );
    }
}

export default CarouselSecondary;
