import React from 'react';

export default class Piece extends React.Component {
  render() {
    // deconstruct properties for Piece
    const { title, imgPath, description } = this.props.details;

    return (
      <div className="single-piece">
        {console.log(imgPath)}
        <h1>{title}</h1>
        <img src={imgPath} alt={title} />
        <p>{description}</p>
      </div>
    );
  }
}
