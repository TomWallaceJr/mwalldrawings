import React from 'react';
import { Carousel } from 'react-bootstrap';
import brielle from '../../images/brielle.jpg';
import gabbydog from '../../images/gabbydog.jpg';
import family from '../../images/family.jpg';
import './Carousel.css';

export default function CarouselContainer() {
  return (
    <Carousel fade className="carousel">
      <Carousel.Item>
        <img className="carousel-img" src={gabbydog} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-img" src={brielle} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel-img" src={family} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
