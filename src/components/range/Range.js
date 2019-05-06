import React, { useState } from 'react';

import HandsList from './List';
import Hand, { Cards } from '../../models/Hand';
import HandsTable from '../hands-table/Table';

import './Range.scss';

const Range = () => {

  const [hands] = useState(JSON.parse(
    window.localStorage.getItem('hands') || '[]'
  ).map(hand => new Hand(hand)));

  const [position, setPosition] = useState('utg');
  const [, updateCount] = useState(hands.length);

  const saveHands = () => {
    window.localStorage.setItem('hands', JSON.stringify(hands));
  };

  const setHandPosition = hand => {
    hand.position === position
      ? delete hand.position
      : hand.position = position;
  };

  const sortHands = () => {
    hands.sort((a, b) => {
      return Cards.indexOf(a.first.figure)
        - Cards.indexOf(b.first.figure)
        + Cards.indexOf(a.second.figure)
        - Cards.indexOf(b.second.figure)
    });
  };

  const onHandChange = (hand) => {
    const index = hands.indexOf(hand);

    if (index > -1) hands.splice(index, 1);

    setHandPosition(hand);
    hands.push(hand);
    saveHands();
    sortHands();
    updateCount(Date.now());
  };

  const onPositionChange = position => {
    setPosition(position);
  };

  return (
    <div className="range">
      <HandsTable
        hands={hands}
        position={position}
        onChange={onHandChange} />
      <HandsList
        hands={hands}
        onChange={onPositionChange} />
    </div>
  );
};

export default Range;
