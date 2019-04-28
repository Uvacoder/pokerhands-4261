import React, { useState, useEffect } from 'react';

import CardModel from '../../models/Card';
import HandModel from '../../models/Hand';
import CardPicker from '../card-picker/CardPicker';

const Hand = props => {

  const [hand, setHand] = useState(null);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);

  useEffect(() => {
    if (first && second) {
      setHand(new HandModel([first, second]));
    }
  }, [first, second]);

  useEffect(() => {
    hand && props.onChange(hand);
  }, [props, hand]);

  const onFirstSelect = (figure, color) => {
    const card = new CardModel({ figure, color });
    setFirst(card);
  };

  const onSecondSelect = (figure, color) => {
    const card = new CardModel({ figure, color });
    setSecond(card);
  };

  return (
    <div className="game-hand">
      <h3>Your Hand: {hand && hand.getName()}</h3>
      <div>
        <CardPicker onChange={onFirstSelect} />
        <CardPicker onChange={onSecondSelect} />
      </div>
    </div>
  );
};

export default Hand;
