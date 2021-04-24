import React from 'react';
import portfolio from '../../portfolio';
import Piece from '../Piece/Piece';

export default function MainGallery() {
  return (
    <div>
      {Object.keys(portfolio).map((key) => (
        <Piece key={key} index={key} details={portfolio[key]} />
      ))}
    </div>
  );
}
