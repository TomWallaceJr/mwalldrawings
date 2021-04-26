import React from 'react';
import portfolio from '../../portfolio';
import Piece from '../Piece/Piece';

export default function MainGallery() {
  return (
    <>
      <h1 className="text-center">Main Gallery</h1>
      <p>
        Everything in the Main gallery is available to purchase. Contact me for
        pricing.
      </p>
      {Object.keys(portfolio).map((key) => {
        if (portfolio[key].type === 'misc') {
          return (
            <div>
              <Piece key={key} index={key} details={portfolio[key]} />
            </div>
          );
        } else return null;
      })}
    </>
  );
}
