import React, { useState, useEffect, useRef } from 'react';

const Position = props => {

  const hands = props.hands.filter(
    hand => hand.position === props.position
  );

  const getClasses = () => {
    return `
      position
      ${props.position}
      ${props.selected ? 'selected' : ''}
    `;
  };

  return (
    <div
      className={getClasses()}
      onClick={props.onChange.bind(this, props.position)}
    >
      <h4>
        {props.position}
        <span>
          {hands.length} hands
          ({ Math.round(hands.length / 169 * 100) }%)
        </span>
      </h4>
      <div className="hands">
        {hands.map(
          (hand, i) => <div key={i}>{hand.getName()}</div>
        )}
      </div>
    </div>
  );
};

const List = props => {

  const ref = useRef(false);
  const positions = ['utg', 'hj', 'cu', 'bt', 'sb'];
  const [selected, setSelected] = useState('utg')
  const [hands, setHands] = useState(props.hands);

  useEffect(() => {
    if (ref.current !== selected) {
      props.onChange(selected);
    }
    ref.current = selected
  });

  useEffect(() => {
    setHands(props.hands);
  }, [props.hands]);

  const onPositionSelect = position => setSelected(position);

  return (
    <div className="list">
      <h3>
        POSITIONS
        <span>
          {hands.length} hands
          ({ Math.round(hands.length / 169 * 100) }%)
        </span>
      </h3>
      {positions.map(
        position => <Position
          hands={hands}
          key={position}
          position={position}
          onChange={onPositionSelect}
          selected={position === selected}
        />
      )}
    </div>
  );
};

export default List;
