import React from 'react';
import portfolio from '../../portfolio';
import Piece from '../Piece/Piece';

export default function People() {
  return (
    <>
      {Object.keys(portfolio).map((key) => {
        if (portfolio[key].type === 'people') {
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
