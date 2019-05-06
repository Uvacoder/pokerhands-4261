import React from 'react';

const Card = props => (
  <div className={`card-picker-card color-${props.color}`}>
    {props.figure === 'T' ? 10 : props.figure}
    <span className={props.color}></span>
    <span className="reset" onClick={props.onReset}>x</span>
    <span className={props.color}></span>
  </div>
);

export default Card;
