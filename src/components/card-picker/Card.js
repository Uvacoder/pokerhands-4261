import React from 'react';

const Card = props => (
  <div className={`card-picker-card ${props.color}`}>
    <span>{props.figure}</span>
    <span className="reset" onClick={props.onReset}>x</span>
    <span>{props.figure}</span>
  </div>
);

export default Card;
