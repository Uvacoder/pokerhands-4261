import React, { useState, useEffect, useRef } from 'react';

const Colors = props => {

  const ref = useRef(false);
  const [color, setColor] = useState(props.color);
  const colors = ['spades', 'hearts', 'diamonds', 'clubs']

  useEffect(() => {
    ref.current !== color && props.onChange(color);
    ref.current = color;
  });

  const onClick = color => setColor(color);

  return (
    <div className="card-picker-colors">
      {colors.map(color => (
        <div
          key={color}
          className={`card-picker-color ${color}`}
          onClick={onClick.bind(this, color)}
        ></div>
      ))}
    </div>
  );
};

export default Colors;
