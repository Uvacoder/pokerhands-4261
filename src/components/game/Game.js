import React, { useState, useEffect } from 'react';

import Hand from './Hand';
import Board from './Board';
import Stats from './Stats';
import GameModel from '../../models/Game';

import './Game.scss';

const Game = () => {

  const [game, setGame] = useState(new GameModel());
  const [hand, setHand] = useState(null);
  const [, setBoard] = useState(null);

  useEffect(() => {
    setGame(new GameModel({ hand }));
  }, [hand]);

  return (
    <div className="game">
      <Hand onChange={hand => setHand(hand)} />
      <Stats game={game} />
      <Board onChange={board => setBoard(board)} />
    </div>
  );
};

export default Game;
