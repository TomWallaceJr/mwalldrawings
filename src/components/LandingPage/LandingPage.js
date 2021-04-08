import React from 'react';
import CarouselContainer from '../Carousel/CarouselContainer';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <main>
      <CarouselContainer />
      <p className="p-4">
        Custom portraits of your furry friends, loved ones, or anything!
        <br />
        Contact Me for a quote today!
      </p>
    </main>
  );
}
