import React from 'react';

import Card from '../../models/Card';
import CardPicker from '../card-picker/CardPicker';

const Board = () => {

  const onCardSelect = (figure, color) => {
    const card = new Card({ figure, color });
    console.log('onCardSelect', card);
  };

  return (
    <div className="game-board">
      <h3>The Board:</h3>
      <div>
        <CardPicker onChange={onCardSelect} />
        <CardPicker onChange={onCardSelect} />
        <CardPicker onChange={onCardSelect} />
        <CardPicker onChange={onCardSelect} />
        <CardPicker onChange={onCardSelect} />
      </div>
    </div>
  );
};

export default Board;
