import React from 'react';

const Tile = props => {

  const getClasses = () => {
    return `
      tile
      ${props.hand.isPair() ? 'pair' : ''}
      ${props.hand.isSuite() ? 'suite' : ''}
      ${props.hand.position ? props.hand.position : ''}
    `;
  };

  return (
    <div
      onClick={props.onChange}
      className={getClasses()}
    >
      <span className="text">
        {props.hand.getName()}
        <div>{props.hand.nash}</div>
      </span>
    </div>
  );
};

export default Tile;
