import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../images/eagle.jpg';
import image2 from '../../images/lovebirds.jpg';
import image3 from '../../images/storm.jpg';
import './Carousel.css';

export default function CarouselContainer() {
  return (
    <Carousel fade className="carousel">
      <Carousel.Item>
        <img className="carousel-img" src={image1} alt="First slide" />
        <Carousel.Caption>
          <p className="label">Pet Portraits</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="carousel-img" src={image2} alt="Second slide" />
        <Carousel.Caption>
          <p className="label">Portaits</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="carousel-img" src={image3} alt="Third slide" />
        <Carousel.Caption>
          <p className="label">Acrylics</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
