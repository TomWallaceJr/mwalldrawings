import React, { useState } from 'react';
import portfolio from '../../helpers/portfolio';
import Piece from '../Piece/Piece';

export default function MainGallery() {
  // const [pieces, setPieces] = useState(Object.keys(portfolio).map((x) => x));

  return (
    <div>
      {Object.keys(portfolio).map((key) => (
        <Piece
          key={key}
          index={key} // if we need access to key we need to pass it down as prop as something other than 'key'
          details={portfolio[key]}
        />
      ))}
    </div>
  );
}
