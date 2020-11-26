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
                <h3 className="Carousel__h3">RECOMENDAMOS PARA TI</h3>
                <ElasticCarousel breakPoints={breakPoints}>

                    {this.props.data.length === 0 ? "" : this.props.data.slice(0,16).map((info) => (
                        <Item key={info.id}>
                <MediaCard  ID={info.id} name={info.name} price={info.price} description={info.description} click={this.props.Add} />
                </Item>))}
                </ElasticCarousel>
            </div>
        );
    }
}

export default CarouselSecondary;
