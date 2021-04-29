import React from 'react';
import portfolio from '../../portfolio';
import Piece from '../Piece/Piece';
import './Pets.css';

export default function Pets() {
  return (
    <>
      <h1 className="text-center cursive-font">Sample Work</h1>
      <section className="gallery-container">
        {Object.keys(portfolio).map((key) => {
          if (portfolio[key].type === 'pets') {
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
