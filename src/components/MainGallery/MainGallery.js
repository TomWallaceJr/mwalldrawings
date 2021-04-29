import React from 'react';
import portfolio from '../../portfolio';
import Piece from '../Piece/Piece';
import './MainGallery.css';

export default function MainGallery() {
  return (
    <>
      <h1 className="text-center cursive-font">Main Gallery</h1>
      <p>
        Everything in the Main Gallery is available for purchase. Contact me for
        pricing.
      </p>
      <section className="gallery-container">
        {Object.keys(portfolio).map((key) => {
          if (portfolio[key].type === 'misc') {
            return (
              <div className="gallery-piece">
                <Piece key={key} index={key} details={portfolio[key]} />
              </div>
            );
          } else return null;
        })}
      </section>
    </>
  );
}
