import React from 'react';
import './Piece.css';

export default class Piece extends React.Component {
  render() {
    // deconstruct properties for Piece
    const { title, imgPath, description, type } = this.props.details;

    return (
      <div className="w-75 mx-auto d-flex flex-column p-2 image-container">
        {type === 'misc' ? <h1 className="mx-auto">{title}</h1> : null}
        <img src={imgPath} alt={title} className="main-gallery-image" />
        <p className="text-center">{description}</p>
      </div>
    );
  }
}
