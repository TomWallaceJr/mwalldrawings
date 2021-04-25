import React from 'react';
import self from '../../images/self.jpg';
import self2 from '../../images/melissaself.jpg';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <div className="about-body">
      <section className="about-section">
        <h1 className="text-center">Hi! I'm Melissa!</h1>
        <h4 className="text-center"> Wife | Mother | Artist</h4>
        <img
          src={self}
          alt="self portrait"
          className="w-100 h-75 mx-auto rounded-pill"
        />
      </section>
      <section className="about-section">
        <h3 className="text-center">Artist Statement</h3>
        <p>
          What is art? A question everyone and no one has an answer to. We all
          perceive the world in different ways. To me art is displaying that
          perception.
        </p>
        <p>
          {' '}
          I have always been fascinated by the idea that we are made of tiny
          bits of energy. In science they discuss how energy is often shown as
          light. The so-called light within us all. Every person is a prism.
          When I do a portrait in my own style I use color to reflect who the
          person is not just what they look like. Are they very calm- blue.
          Energetic- orange as examples.
        </p>
        <p>
          {' '}
          For many years I was unable to create. Bogged down by life, emotional
          baggage and other factors I lost a lot of my light. Now during that
          time I found that my cats as well as other innocent creatures or
          images helped me. This is why I choose animals as the subject matter
          for my more recent work.
        </p>
        <p> I hope that my work will bring other light or a smile.</p>
      </section>
      <section className="about-section">
        <img
          src={self2}
          alt="self-portrait"
          className="w-100 h-75 mx-auto rounded-pill"
        />
        <h3 className="text-center">About Me</h3>
        <p>
          I graduated from Keystone College with a B.A in visual arts. I'm
          happily married and a mother to a wonderful little boy and three cats.
          When I am not drawing or wrangling in a toddler, you can find me with
          my nose in book somewhere. I love to travel and my dream vacation
          destination would have to be Italy.
        </p>
      </section>
    </div>
  );
}
