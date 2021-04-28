import React from 'react';
import './Piece.css';

export default class Piece extends React.Component {
  render() {
    // deconstruct properties for Piece
    const { title, imgPath, description, type } = this.props.details;

    return (
      <div className="image-container">
        <img src={imgPath} alt={title} className="piece-img" />
        {type === 'misc' ? <h1 className="text-center">{title}</h1> : null}
        <p className="text-center">{description}</p>
      </div>
    );
  }
}
