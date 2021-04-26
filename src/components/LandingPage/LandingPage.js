import React from 'react';
import CarouselContainer from '../Carousel/CarouselContainer';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <main>
      <CarouselContainer />
      <p className="p-4">
        Custom pastel portraits of your pets and loved ones!
        <br />
        Contact Me for a quote today!
      </p>
    </main>
  );
}
