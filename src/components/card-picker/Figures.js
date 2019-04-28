import React, { useState, useEffect, useRef } from 'react';

import { Cards } from '../../models/Hand';

const Figures = props => {

  const ref = useRef(false);
  const [figure, setFigure] = useState(props.figure);

  useEffect(() => {
    ref.current !== figure && props.onChange(figure);
    ref.current = figure;
  });

  const onClick = figure => setFigure(figure);

  return (
    <div className="card-picker-figures">
      {Cards.map(card => (
        <div
          key={card}
          className="card-picker-figure"
          onClick={onClick.bind(this, card)}
        >{card}</div>
      ))}
    </div>
  );
};

export default Figures;
