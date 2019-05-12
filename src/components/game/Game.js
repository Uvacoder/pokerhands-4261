import { Redirect } from 'react-router-dom';
import React, { useState } from 'react';

import Room from './Room.js'

import './Game.scss';

const Game = () => {

  const [roomId, setRoomId] = useState(null);

  const createRoom = async () => {
    const id = await Room.create();

    window.localStorage.setItem('table', id);
    setRoomId(id);
  };

  return (
    <div className="game">
      <button onClick={createRoom}>CREATE ROOM</button>
      {roomId && <Redirect to={`/game/table/${roomId}`} />}
    </div>
  );
};

export default Game;
