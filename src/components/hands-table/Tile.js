import React from 'react';

const Tile = props => {

  const getClasses = () => {
    return `
      hands-table-tile
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
      <span className="hands-table-text">
        {props.hand.getName()}
      </span>
    </div>
  );
};

export default Tile;
