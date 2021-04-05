import React from 'react';
import CarouselContainer from '../Carousel/CarouselContainer';
import NavBar from '../NavBar/NavBar';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <main>
      <NavBar />
      <p className="p-2">
        Custom portraits of your furry friends, loved ones, or anything!
        <br />
        Contact Me for a quote today!
      </p>
      <CarouselContainer />
    </main>
  );
}
