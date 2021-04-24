import React from 'react';
import portfolio from '../../portfolio';
import Piece from '../Piece/Piece';

export default function Pets() {
  // IF portfolio[key].type === pets return Piece component else return null

  Object.keys(portfolio).map((key) => {
    console.log(portfolio[key].type);
    if (portfolio[key].type === 'pets') {
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
