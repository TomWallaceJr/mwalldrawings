import React from 'react';
import CarouselContainer from '../Carousel/CarouselContainer';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <main>
      <CarouselContainer />
      <p className="p-4">
        Custom pastel portraits of your pets and loved ones!
        <br />
        <Link to="/contactme">Contact Me</Link> for a quote today!
      </p>
    </main>
  );
}
