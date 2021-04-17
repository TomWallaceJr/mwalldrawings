import React from 'react';

export default class Piece extends React.Component {
  render() {
    // deconstruct properties for Piece
    const { title, imgPath, description, type } = this.props.details;

    return (
      <div className="w-100 d-flex flex-column p-2">
        <h1 className="mx-auto">{title}</h1>
        <img src={imgPath} alt={title} className="w-100 h-75 mx-auto" />
        <p>{description}</p>
      </div>
    );
  }
}
