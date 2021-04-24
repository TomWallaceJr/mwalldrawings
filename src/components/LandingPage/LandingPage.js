import React from 'react';
import CarouselContainer from '../Carousel/CarouselContainer';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <main>
      <CarouselContainer />
      <p className="p-4">
        Custom pastel portraits of your pets or loved ones!
        <br />
        Contact Me for a quote today!
      </p>
    </main>
  );
}
