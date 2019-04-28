import React, { useState, useEffect } from 'react';

import Hand from './Hand';
import Board from './Board';
import Stats from './Stats';

import './Game.css';

const Turn = () => {

  const [hand, setHand] = useState(null);
  const [board, setBoard] = useState(null);

  useEffect(() => {
    console.log('Game useEffect', hand);
  }, [hand]);

  return (
    <div className="game">
      <Hand onChange={hand => setHand(hand)} />
      <Board onChange={board => setBoard(board)} />
      <Stats hand={hand} board={board} />
    </div>
  );
};

export default Turn;
