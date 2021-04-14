import React from 'react';
import { Carousel } from 'react-bootstrap';
import koval from '../../images/koval.jpg';
import grandkids from '../../images/grandkids.jpg';
import ally from '../../images/ally.jpg';
import './Carousel.css';

export default function CarouselContainer() {
  return (
    <Carousel fade className="carousel">
      <Carousel.Item>
        <img className="carousel-img" src={koval} alt="First slide" />
        <Carousel.Caption>
          <h3 className="label">Pet Portraits</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="carousel-img" src={grandkids} alt="Second slide" />
        <Carousel.Caption>
          <h3 className="label">Portaits</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="carousel-img" src={ally} alt="Third slide" />
        <Carousel.Caption>
          <h3 className="label">Acrylics</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
