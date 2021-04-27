import React from 'react';
import portfolio from '../../portfolio';
import Piece from '../Piece/Piece';
import './People.css';

export default function People() {
  return (
    <>
      <h1 className="text-center">Sample Work</h1>
      <section className="gallery-container">
        {Object.keys(portfolio).map((key) => {
          if (portfolio[key].type === 'people') {
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
