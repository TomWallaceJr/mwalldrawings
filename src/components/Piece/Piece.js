import React from 'react';

export default class Piece extends React.Component {
  render() {
    // deconstruct properties for Piece
    const { title, img, description, type } = this.props.details;

    return (
      <div className="single-piece">
        {console.log(this)}
        <h1>{title}</h1>
        <img src={img} alt={title}></img>
        <p>{description}</p>
      </div>
    );
  }
}
