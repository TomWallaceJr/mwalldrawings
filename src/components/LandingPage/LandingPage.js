import React from 'react';
import CarouselContainer from '../Carousel/CarouselContainer';
import NavBar from '../NavBar/NavBar';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <main>
      <NavBar />
      <p>
        Paint and Pastel portraits of people, nature, animals, and your furry
        friends!
        <br />
        Contact Me for a quote today!
      </p>
      <CarouselContainer />
    </main>
  );
}
