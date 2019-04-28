import React, { useState, useEffect, useRef } from 'react';

import Card from './Card';
import Colors from './Colors';
import Figures from './Figures';

import './CardPicker.css';

const CardPicker = props => {

  const ref = useRef(false);
  const [color, setColor] = useState(null);
  const [figure, setFigure] = useState(null);

  useEffect(() => {
    if (figure && color && ref.current !== color) {
      props.onChange(figure, color);
    }
    ref.current = color || false;
  });

  return (
    <div className="card-picker">
      {figure && !color && <Colors onChange={setColor} />}
      {!figure && !color && <Figures onChange={setFigure} />}
      {figure && color && <Card figure={figure} color={color} />}
    </div>
  );
};

export default CardPicker;
