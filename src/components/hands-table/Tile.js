import React, { useState, useEffect, useRef } from 'react';

const Tile = props => {

  const ref = useRef(false);
  const [selected, setSelected] = useState(false);
  const [hand] = useState(props.hand);

  useEffect(() => {
    if (ref.current !== selected) {
      hand.selected = selected;
      props.onChange(hand);
    }
    ref.current = selected
  });

  const getClasses = () => {
    return `
      hands-table-tile
      ${selected ? 'selected' : ''}
      ${hand.isPair() ? 'pair' : ''}
      ${hand.isSuite() ? 'suite' : ''}
    `;
  };

  const onClick = () => setSelected(!selected);

  return (
    <div
      onClick={onClick}
      className={getClasses()}
    >
      <span className="hands-table-text">
        {hand.getName()}
      </span>
    </div>
  );
};

export default Tile;
