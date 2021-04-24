import React from 'react';
import portfolio from '../../portfolio';
import Piece from '../Piece/Piece';

export default function Pets() {
  return (
    <>
      {Object.keys(portfolio).map((key) => {
        if (portfolio[key].type === 'pets') {
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
