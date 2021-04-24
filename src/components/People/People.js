import React from 'react';
import portfolio from '../../portfolio';
import Piece from '../Piece/Piece';

export default function People() {
  // IF portfolio[key].type === people return Piece component else return null

  Object.keys(portfolio).map((key) => {
    console.log(portfolio[key].type);
    if (portfolio[key].type === 'people') {
      return (
        <div>
          <Piece key={key} index={key} details={portfolio[key]} />
        </div>
      );
    } else {
      return null;
    }
  });
}
